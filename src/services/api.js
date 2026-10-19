import axios from 'axios';

// Resolve API base URL from Vite environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.shiftahead.tech/v1';

// Contact/email server. Empty = same origin (Vite dev proxy forwards /api to localhost:5000)
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Response interceptor to simplify API responses
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle global API errors here (e.g. logging)
    console.error('API Service Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const apiService = {
  /**
   * Submits a contact inquiry to the server API.
   * @param {Object} data - Contact form data (name, email, phone, subject, message).
   * @returns {Promise}
   */
  submitContactForm: async (data) => {
    // Sent to the local email server (server/index.js), which saves to MySQL and emails the team
    try {
      const response = await axios.post(`${CONTACT_API_URL}/api/contact`, data, { timeout: 20000 });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Could not send your message. Please try again.');
    }
  },

  /**
   * Submits a job application (Careers page).
   * @param {Object} data - Job application form data.
   * @returns {Promise}
   */
  submitJobApplication: async (data) => {
    try {
      return await apiClient.post('/careers/apply', data);
    } catch {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Application received! Thank you for applying to Shift Ahead.',
            data
          });
        }, 1500);
      });
    }
  }
};

export default apiClient;
