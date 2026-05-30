import {
  BsShieldCheck,
  BsCloudArrowUp,
  BsCpu,
  BsLightning,
  BsGlobe2,
  BsRobot,
  BsCode,
  BsLayersHalf,
  BsDatabase,
  BsLock,
  BsBuildingGear,
  BsGraphUp,
  BsHeadset,
  BsPeopleFill,
} from 'react-icons/bs';

// ─── NAVIGATION ────────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
    dropdown: [
      { label: 'Our Mission & Vision', path: '/about' },
      { label: 'Why VeltrixSecure', path: '/about' },
      { label: 'Leadership & Expertise', path: '/about' },
      { label: 'Career & Opportunities', path: '/careers' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Cybersecurity Solutions', path: '/services?tab=cybersecurity' },
      { label: 'Managed Services', path: '/services?tab=managed-services' },
      { label: 'Cloud Solutions', path: '/services?tab=cloud-solutions' },
      { label: 'Backup & Recovery', path: '/services?tab=backup-recovery' },
      { label: 'IT Consulting', path: '/services?tab=it-consulting' },
      { label: 'Operations Management', path: '/services?tab=operations-management' },
      { label: 'End-to-End Support', path: '/services?tab=end-to-end-support' },
    ],
  },
  {
    label: 'Case Studies',
    path: '/case-studies',
    dropdown: [
      { label: 'Enterprise Security Hardening', path: '/case-studies' },
      { label: 'Cloud Migration & Optimization', path: '/case-studies' },
      { label: 'Automation-Driven Efficiency', path: '/case-studies' },
      { label: 'Zero-Trust Implementation', path: '/case-studies' },
      { label: 'Digital Transformation Project', path: '/case-studies' },
    ],
  },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Solutions',
    shortDesc: 'Threat detection, vulnerability management, compliance audits, and incident response.',
    longDesc: 'Provide advanced cybersecurity and compliance-driven solutions. We secure every business layer with threat detection, vulnerability management, compliance audits, and incident response.',
    icon: BsShieldCheck,
    features: ['Threat Detection', 'Vulnerability Management', 'Compliance Audits', 'Incident Response'],
  },
  {
    id: 'managed-services',
    title: 'Managed Services',
    shortDesc: '24×7 monitoring, patching, backup, and full infrastructure management.',
    longDesc: 'Maximize technology investments through managed services. We provide 24×7 monitoring, patching, proactive backup, and comprehensive infrastructure management.',
    icon: BsBuildingGear,
    features: ['24×7 Monitoring', 'System Patching', 'Backup Management', 'Infrastructure Management'],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    shortDesc: 'Secure cloud migration, hybrid cloud architecture, and disaster recovery.',
    longDesc: 'Optimize costs and maximize technology investments through cloud adoption. We handle secure cloud migrations, hybrid cloud setups, and disaster recovery planning.',
    icon: BsCloudArrowUp,
    features: ['Secure Cloud Migration', 'Hybrid Cloud', 'Disaster Recovery', 'Cloud Optimization'],
  },
  {
    id: 'backup-recovery',
    title: 'Backup & Recovery',
    shortDesc: 'Automated backups, business continuity planning, and secure data protection.',
    longDesc: 'Ensure uninterrupted business operations. We provide automated backups, rigorous business continuity testing, and robust data protection to guarantee continuity.',
    icon: BsDatabase,
    features: ['Automated Backups', 'Business Continuity', 'Data Protection', 'Rapid Recovery'],
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    shortDesc: 'Strategic IT strategy, risk assessment, compliance, and technology roadmapping.',
    longDesc: 'To be your most trusted IT partner, we offer comprehensive IT consulting including strategy development, risk assessment, compliance readiness, and technology roadmaps.',
    icon: BsLayersHalf,
    features: ['IT Strategy', 'Risk Assessment', 'Compliance Planning', 'Technology Roadmap'],
  },
  {
    id: 'operations-management',
    title: 'Operations Management',
    shortDesc: 'Streamlined IT processes, SLA-driven support, and performance optimization.',
    longDesc: 'Make IT operations easy, reliable, and scalable. We streamline IT processes, deliver SLA-driven support, and continuously optimize performance.',
    icon: BsGraphUp,
    features: ['Streamlined Processes', 'SLA-Driven Support', 'Performance Optimization', 'Reliability Engineering'],
  },
  {
    id: 'end-to-end-support',
    title: 'End-to-End Support',
    shortDesc: 'Complete lifecycle support from initial deployment to ongoing maintenance.',
    longDesc: 'Deliver transparent, customer-centric support with measurable outcomes. We offer complete lifecycle support from deployment to ongoing maintenance.',
    icon: BsHeadset,
    features: ['Lifecycle Support', 'Deployment', 'Ongoing Maintenance', 'Customer-Centric Helpdesk'],
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { count: 500, suffix: '+', label: 'Enterprise Clients Secured', icon: BsBuildingGear },
  { count: 99.9, suffix: '%', label: 'Uptime SLA Guaranteed', icon: BsGraphUp },
  { count: 50, suffix: '+', label: 'Security Certifications', icon: BsShieldCheck },
  { count: 24, suffix: '/7', label: 'SOC & Support Coverage', icon: BsHeadset },
];

export const WHY_CHOOSE_US = [
  {
    icon: BsShieldCheck,
    title: 'Expertise Across Domains',
    desc: 'Specialists in Microsoft 365, Azure, Security, Cloud, Backup, Compliance, and IT Operations.',
    color: 'from-electric-DEFAULT/20 to-electric-DEFAULT/5',
    borderColor: 'rgba(0, 87, 255, 0.4)',
  },
  {
    icon: BsGraphUp,
    title: 'Cost Efficiency',
    desc: 'Reduce overhead, maximize ROI, and optimize your technology investments.',
    color: 'from-neon-cyan/20 to-neon-cyan/5',
    borderColor: 'rgba(0, 229, 255, 0.4)',
  },
  {
    icon: BsLightning,
    title: 'Simplicity',
    desc: 'Infrastructure made easy with clear processes and simplified IT operations.',
    color: 'from-neon-purple/20 to-neon-purple/5',
    borderColor: 'rgba(123, 97, 255, 0.4)',
  },
  {
    icon: BsPeopleFill,
    title: 'Trust',
    desc: 'Compliance-ready, transparent, and customer-centric support you can rely on.',
    color: 'from-neon-green/20 to-neon-green/5',
    borderColor: 'rgba(0, 255, 179, 0.4)',
  },
  {
    icon: BsCloudArrowUp,
    title: 'Continuity',
    desc: 'Cloud + backup integration ensures your business operations never stop.',
    color: 'from-neon-blue/20 to-neon-blue/5',
    borderColor: 'rgba(0, 180, 255, 0.4)',
  },
];

// ─── PROCESS STEPS ─────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'In-depth assessment of your infrastructure, threat landscape, and business objectives.',
    icon: BsGlobe2,
  },
  {
    step: '02',
    title: 'Strategy',
    desc: 'Tailored technology roadmap and security architecture blueprint aligned to your goals.',
    icon: BsLayersHalf,
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Agile implementation with security-by-design principles woven into every sprint.',
    icon: BsCode,
  },
  {
    step: '04',
    title: 'Security Testing',
    desc: 'Rigorous penetration testing, vulnerability scans, and compliance validation.',
    icon: BsShieldCheck,
  },
  {
    step: '05',
    title: 'Deployment',
    desc: 'Zero-downtime deployment with automated rollback and real-time health monitoring.',
    icon: BsCloudArrowUp,
  },
  {
    step: '06',
    title: 'Ongoing Support',
    desc: '24/7 SOC monitoring, continuous improvement cycles, and dedicated account management.',
    icon: BsHeadset,
  },
];

// ─── CASE STUDIES ──────────────────────────────────────────────────────────────
export const CASE_STUDIES = [
  {
    id: 'enterprise-security',
    company: 'Global FinTech Enterprise',
    title: 'Enterprise Security Hardening & SOC Implementation',
    summary:
      'Deployed a full-stack security transformation for a 5,000-employee FinTech company — implementing SIEM, 24/7 SOC, and zero-trust architecture that reduced security incidents by 78% in 90 days.',
    metric: '78%',
    metricLabel: 'Security Incidents Reduced',
    tag: 'Cybersecurity',
    color: 'from-electric-DEFAULT/30 to-transparent',
  },
  {
    id: 'cloud-migration',
    company: 'Healthcare Network',
    title: 'Secure Cloud Migration to AWS',
    summary:
      'Led a zero-downtime migration of a 12-hospital network\'s entire infrastructure to AWS with HIPAA-compliant security controls, reducing infrastructure costs by 34% and improving system availability to 99.97%.',
    metric: '99.97%',
    metricLabel: 'System Availability',
    tag: 'Cloud Infrastructure',
    color: 'from-neon-cyan/20 to-transparent',
  },
  {
    id: 'automation-efficiency',
    company: 'Manufacturing Conglomerate',
    title: 'Automation-Driven Operational Efficiency',
    summary:
      'Implemented RPA and AIOps automation across 200+ manufacturing sites, automating 65% of routine IT operations and reducing incident resolution time from 4 hours to 22 minutes.',
    metric: '65%',
    metricLabel: 'Operations Automated',
    tag: 'Automation',
    color: 'from-neon-purple/20 to-transparent',
  },
  {
    id: 'zero-trust',
    company: 'Government Agency',
    title: 'Zero-Trust Architecture Implementation',
    summary:
      'Architected and deployed a complete zero-trust network framework for a federal agency protecting 50TB of sensitive data, achieving NIST 800-207 compliance and eliminating lateral movement risks.',
    metric: '100%',
    metricLabel: 'NIST Compliance Achieved',
    tag: 'Network Security',
    color: 'from-neon-green/20 to-transparent',
  },
  {
    id: 'digital-transformation',
    company: 'E-Commerce Platform',
    title: 'Full-Scale Digital Transformation',
    summary:
      'Modernized a legacy e-commerce monolith to a microservices architecture with AI-powered personalization, increasing platform performance by 3.2x and driving a 45% uplift in conversion rates.',
    metric: '3.2x',
    metricLabel: 'Platform Performance Gain',
    tag: 'Digital Transformation',
    color: 'from-neon-blue/20 to-transparent',
  },
  {
    id: 'ai-threat-detection',
    company: 'Banking Institution',
    title: 'AI-Powered Fraud & Threat Detection',
    summary:
      'Integrated a custom ML-based fraud detection engine for a national bank processing 2M+ daily transactions, reducing false positives by 82% and detecting 99.6% of fraudulent activities in real time.',
    metric: '99.6%',
    metricLabel: 'Fraud Detection Accuracy',
    tag: 'AI Integration',
    color: 'from-electric-DEFAULT/20 to-transparent',
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      'DEVELTRIXSECURE transformed our entire security posture in under 4 months. The zero-trust implementation was flawless and our compliance team is thrilled with the SOC 2 automation.',
    author: 'Rajesh Menon',
    role: 'CISO, Global FinTech Corp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      'The cloud migration was seamless — zero downtime, fully HIPAA compliant, and 34% cheaper than our on-premise costs. Their team understood healthcare IT like no other vendor.',
    author: 'Dr. Priya Sharma',
    role: 'CTO, MedNetwork Healthcare',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
  },
  {
    quote:
      'Their AI integration team built a fraud detection model that outperformed our existing vendor by 3x. The ROI in the first quarter alone justified the entire engagement.',
    author: 'Amit Desai',
    role: 'VP Technology, National Banking Group',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
  },
];

// ─── FAQS ─────────────────────────────────────────────────────────────────────
export const FAQS = [
  {
    question: 'What industries does DEVELTRIXSECURE TECHNOLOGIES LLP serve?',
    answer:
      'We serve enterprises across FinTech, Healthcare, Government, Manufacturing, E-Commerce, Banking, and Telecommunications. Our cybersecurity and IT solutions are tailored to the unique compliance and operational requirements of each sector — including HIPAA, PCI DSS, ISO 27001, SOC 2, and GDPR.',
  },
  {
    question: 'Where is DEVELTRIXSECURE TECHNOLOGIES LLP located?',
    answer:
      'Our registered office is at W-159, Ground Floor, Sector 12, Gautam Buddha Nagar, Noida, Uttar Pradesh, India – 201301. We operate remotely and on-site across India and serve international clients globally.',
  },
  {
    question: 'Do you offer 24/7 cybersecurity monitoring and support?',
    answer:
      'Yes. Our Security Operations Centre (SOC) operates 24 hours a day, 7 days a week, 365 days a year. We provide real-time threat detection, incident response, and escalation protocols with guaranteed SLA response times.',
  },
  {
    question: 'What certifications and compliance frameworks do you support?',
    answer:
      'DEVELTRIXSECURE supports a wide range of compliance frameworks including ISO 27001, SOC 2 Type I & II, GDPR, HIPAA, PCI DSS, NIST 800-53, and NIST 800-207 (Zero Trust). Our team holds 50+ individual security certifications including CISSP, CISM, CEH, and AWS Security Specialty.',
  },
  {
    question: 'How quickly can DEVELTRIXSECURE onboard and begin delivering?',
    answer:
      'Typical onboarding takes 5–10 business days depending on project scope. For urgent security incidents or penetration testing, we can mobilize within 24–48 hours. Our agile delivery model ensures you see measurable results within the first 30 days of engagement.',
  },
  {
    question: 'Do you offer cloud security and DevSecOps services?',
    answer:
      'Absolutely. We specialize in cloud security posture management (CSPM), DevSecOps pipeline integration, container security (Kubernetes/Docker), and infrastructure-as-code security for AWS, Azure, and Google Cloud Platform environments.',
  },
];

// ─── BLOGS ────────────────────────────────────────────────────────────────────
export const BLOGS = [
  {
    id: 1,
    title: 'Zero-Trust Architecture: Why Perimeter Security Is Dead',
    excerpt:
      'The traditional castle-and-moat security model is obsolete. Explore how zero-trust principles are reshaping enterprise cybersecurity in the age of remote work and cloud-native infrastructure.',
    category: 'Cybersecurity',
    date: 'May 20, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: 2,
    title: 'AI-Driven Threat Detection: The Future of SOC Operations',
    excerpt:
      'Machine learning is transforming Security Operations Centres — from reactive alert fatigue to proactive, context-aware threat hunting. Discover how AI is redefining the modern SOC.',
    category: 'AI Integration',
    date: 'Apr 14, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
  {
    id: 3,
    title: 'Cloud Security Posture Management: A Practical Guide',
    excerpt:
      'Misconfigured cloud resources are the #1 source of enterprise breaches. This guide walks through CSPM tools, best practices, and how to build a continuous compliance posture for AWS and Azure.',
    category: 'Cloud Infrastructure',
    date: 'Mar 8, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    url: '#',
  },
];

// ─── CAREERS ──────────────────────────────────────────────────────────────────
export const CAREERS = [
  {
    id: 'security-engineer',
    title: 'Senior Cybersecurity Engineer',
    department: 'Security Operations',
    location: 'Noida, India (Hybrid)',
    type: 'Full-Time',
    desc: 'Lead security assessments, implement zero-trust architectures, and manage our 24/7 SOC operations for enterprise clients across FinTech, Healthcare, and Government sectors.',
    requirements: [
      '4+ years in cybersecurity engineering or SOC operations',
      'CISSP, CISM, or CEH certification preferred',
      'Hands-on experience with SIEM tools (Splunk, IBM QRadar, or similar)',
    ],
  },
  {
    id: 'cloud-architect',
    title: 'Cloud Security Architect',
    department: 'Cloud & Infrastructure',
    location: 'Noida, India / Remote',
    type: 'Full-Time',
    desc: 'Design secure cloud architectures on AWS, Azure, and GCP. Implement CSPM, DevSecOps pipelines, and enforce infrastructure-as-code security standards for enterprise clients.',
    requirements: [
      '4+ years with AWS or Azure cloud infrastructure',
      'AWS Security Specialty or Azure Security Engineer certification',
      'Expertise in Terraform, Kubernetes, and container security',
    ],
  },
  {
    id: 'ai-engineer',
    title: 'AI/ML Engineer — Security Focus',
    department: 'AI Integration',
    location: 'Noida, India (Hybrid)',
    type: 'Full-Time',
    desc: 'Build and deploy AI/ML models for threat detection, fraud prevention, and security anomaly detection. Integrate LLMs into enterprise security workflows.',
    requirements: [
      '3+ years in ML model development (Python, TensorFlow, PyTorch)',
      'Experience in cybersecurity data science or fraud detection',
      'Familiarity with LLM APIs and RAG architectures',
    ],
  },
];

// ─── OFFICE LOCATIONS ─────────────────────────────────────────────────────────
export const OFFICE_LOCATIONS = [
  {
    city: 'Noida',
    country: 'India',
    role: 'Headquarters & Delivery Centre',
    address: 'W-159, Ground Floor, Sector 12, Gautam Buddha Nagar, Noida, Uttar Pradesh – 201301',
    phone: '+91 120 000 0000',
    email: 'info@veltrixsecure.com',
    hours: '24/7 SOC Operations | Mon–Sat: 9:00 AM – 7:00 PM IST',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.7!2d77.3167!3d28.5706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c7ddddddd%3A0xabcdef!2sSector%2012%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1653245000000!5m2!1sen!2sin',
  },
];

// ─── SOCIAL LINKS ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/develtrixsecure',
  twitter: 'https://twitter.com/develtrixsecure',
  github: 'https://github.com/develtrixsecure',
  facebook: 'https://facebook.com/develtrixsecure',
};

// ─── CONTACT INFO ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email: 'info@veltrixsecure.com',
  phone: '+91 120 000 0000',
  address: 'W-159, Ground Floor, Sector 12, Gautam Buddha Nagar, Noida, Uttar Pradesh – 201301',
  city: 'Noida',
  state: 'Uttar Pradesh',
  country: 'India',
  pincode: '201301',
};

// ─── INDUSTRIES SERVED ────────────────────────────────────────────────────────
export const INDUSTRIES = [
  'FinTech',
  'Healthcare',
  'Government',
  'Manufacturing',
  'Banking',
  'E-Commerce',
  'Telecom',
  'Education',
];

// ─── TRUSTED LOGOS (placeholder names) ───────────────────────────────────────
export const TRUSTED_BY = [
  'Fortune 500 Corp',
  'NationalBank',
  'HealthNet',
  'GovTech India',
  'ManuScale',
  'EcomPlatform',
  'TelecomGiant',
  'FinSecure',
];
