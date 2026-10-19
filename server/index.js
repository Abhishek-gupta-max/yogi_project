import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import mysql from 'mysql2/promise';
import process from 'node:process';

const {
  PORT = 5000,
  SMTP_HOST = 'smtp.gmail.com',
  SMTP_PORT = '465',
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO = 'info@veltrixsecure.com',
  MAIL_PROVIDER = 'formsubmit', // 'formsubmit' (no password) or 'smtp' (Gmail App Password)
  SITE_URL = 'http://localhost:5173',
  DB_HOST = 'localhost',
  DB_PORT = '3306',
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_NAME = 'shiftahead',
} = process.env;

// ---------- Database (XAMPP MySQL / phpMyAdmin) ----------
let pool = null;

async function initDatabase() {
  const conn = await mysql.createConnection({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
  });
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
  await conn.end();

  pool = mysql.createPool({
    host: DB_HOST,
    port: Number(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    connectionLimit: 5,
  });

  await pool.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(150) NOT NULL,
      email VARCHAR(200) NOT NULL,
      phone VARCHAR(30) NULL,
      company VARCHAR(200) NULL,
      subject VARCHAR(200) NULL,
      message TEXT NOT NULL,
      email_sent TINYINT(1) NOT NULL DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  console.log(`MySQL ready: database "${DB_NAME}", table "contact_submissions"`);
}

// ---------- Mailer (Gmail SMTP, free) ----------
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT),
  secure: Number(SMTP_PORT) === 465, // 465 = SSL, 587 = STARTTLS
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function buildEmailHtml(data) {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Company', data.company],
    ['Subject / Service', data.subject],
  ]
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;background:#f1f5f9;font-weight:600;width:160px">${label}</td>
          <td style="padding:8px 12px">${escapeHtml(value)}</td>
        </tr>`
    )
    .join('');

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden">
      <div style="background:#0A2647;color:#fff;padding:16px 20px;font-size:18px;font-weight:bold">
        New Contact Form Message
      </div>
      <table style="width:100%;border-collapse:collapse;font-size:14px">${rows}</table>
      <div style="padding:16px 20px;font-size:14px">
        <div style="font-weight:600;margin-bottom:6px">Message</div>
        <div style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:6px">${escapeHtml(data.message)}</div>
      </div>
    </div>`;
}

// FormSubmit.co: free, no password. The first message triggers a one-time
// activation email to MAIL_TO; after "Confirm" is clicked all messages are delivered.
async function sendViaFormSubmit(data) {
  const response = await fetch(`https://formsubmit.co/ajax/${MAIL_TO}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: SITE_URL,
      Referer: `${SITE_URL}/`,
    },
    body: JSON.stringify({
      _subject: `New inquiry from ${data.name}${data.subject ? ` - ${data.subject}` : ''}`,
      _replyto: data.email,
      _template: 'table',
      _captcha: 'false',
      Name: data.name,
      Email: data.email,
      Phone: data.phone || '-',
      Company: data.company || '-',
      Subject: data.subject || '-',
      Message: data.message,
    }),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || String(result.success) !== 'true') {
    throw new Error(`FormSubmit: ${result.message || response.status}`);
  }
  console.log('FormSubmit:', result.message);
}

async function sendContactNotification(data) {
  if (MAIL_PROVIDER === 'formsubmit') return sendViaFormSubmit(data);
  await transporter.sendMail({
    from: `"Website Contact Form" <${SMTP_USER}>`,
    to: MAIL_TO,
    replyTo: data.email,
    subject: `New inquiry from ${data.name}${data.subject ? ` - ${data.subject}` : ''}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone && `Phone: ${data.phone}`,
      data.company && `Company: ${data.company}`,
      data.subject && `Subject: ${data.subject}`,
      '',
      data.message,
    ]
      .filter((line) => line !== undefined && line !== '')
      .join('\n'),
    html: buildEmailHtml(data),
  });
}

// ---------- API ----------
const app = express();
app.use(cors());
app.use(express.json({ limit: '50kb' }));

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

app.post('/api/contact', async (req, res) => {
  const body = req.body || {};
  const data = {
    name: String(body.name || '').trim().slice(0, 150),
    email: String(body.email || '').trim().slice(0, 200),
    phone: String(body.phone || '').trim().slice(0, 30),
    company: String(body.company || '').trim().slice(0, 200),
    subject: String(body.subject || body.service || '').trim().slice(0, 200),
    message: String(body.message || '').trim().slice(0, 5000),
  };

  if (!data.name || !data.message || !EMAIL_REGEX.test(data.email)) {
    return res.status(400).json({ success: false, message: 'Name, valid email and message are required.' });
  }

  // 1. Save to DB (best-effort, mail still goes if DB is down)
  let submissionId = null;
  if (pool) {
    try {
      const [result] = await pool.query(
        'INSERT INTO contact_submissions (name, email, phone, company, subject, message) VALUES (?, ?, ?, ?, ?, ?)',
        [data.name, data.email, data.phone || null, data.company || null, data.subject || null, data.message]
      );
      submissionId = result.insertId;
    } catch (err) {
      console.error('DB insert failed:', err.message);
    }
  }

  // 2. Send email
  try {
    await sendContactNotification(data);
    if (submissionId) {
      await pool.query('UPDATE contact_submissions SET email_sent = 1 WHERE id = ?', [submissionId]).catch(() => {});
    }
    return res.json({ success: true, message: 'Thank you! Your message has been sent. We will be in touch shortly.' });
  } catch (err) {
    console.error('Email send failed:', err.message);
    if (submissionId) {
      // Saved in DB, so the inquiry is not lost
      return res.json({ success: true, message: 'Thank you! Your message has been received. We will be in touch shortly.' });
    }
    return res.status(500).json({ success: false, message: 'Could not send your message. Please try again later.' });
  }
});

// ---------- Retry: every saved message must reach the inbox ----------
// Rows with email_sent = 0 (mail failed, e.g. before FormSubmit activation)
// are re-sent on startup and then every RETRY_INTERVAL_MS.
const RETRY_INTERVAL_MS = 5 * 60 * 1000;
let retryRunning = false;

async function sendPendingEmails() {
  if (!pool || retryRunning) return;
  retryRunning = true;
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, company, subject, message FROM contact_submissions WHERE email_sent = 0 ORDER BY id'
    );
    for (const row of rows) {
      try {
        await sendContactNotification(row);
        await pool.query('UPDATE contact_submissions SET email_sent = 1 WHERE id = ?', [row.id]);
        console.log(`Pending message #${row.id} emailed`);
      } catch (err) {
        console.error(`Pending message #${row.id} not sent yet:`, err.message);
        break; // same failure would repeat for the rest; try again next round
      }
    }
  } catch (err) {
    console.error('Retry check failed:', err.message);
  } finally {
    retryRunning = false;
  }
}

app.post('/api/contact/retry', async (req, res) => {
  if (!pool) return res.status(503).json({ success: false, message: 'Database not connected.' });
  await sendPendingEmails();
  const [[{ pending }]] = await pool.query('SELECT COUNT(*) AS pending FROM contact_submissions WHERE email_sent = 0');
  res.json({ success: pending === 0, pending });
});

app.get('/api/health', (req, res) => res.json({ ok: true, db: Boolean(pool) }));

app.listen(Number(PORT), async () => {
  console.log(`Contact API running on http://localhost:${PORT}`);
  if (MAIL_PROVIDER === 'formsubmit') {
    console.log(`Mail via FormSubmit.co -> ${MAIL_TO}`);
  } else if (!SMTP_USER || !SMTP_PASS) {
    console.warn('WARNING: SMTP_USER / SMTP_PASS missing in server/.env - emails will not be sent.');
  } else {
    transporter.verify().then(
      () => console.log(`SMTP ready, mails will go to ${MAIL_TO}`),
      (err) => console.error('SMTP login failed:', err.message)
    );
  }
  try {
    await initDatabase();
    await sendPendingEmails();
  } catch (err) {
    console.error('MySQL not available (start MySQL in XAMPP):', err.message);
  }
  setInterval(sendPendingEmails, RETRY_INTERVAL_MS);
});
