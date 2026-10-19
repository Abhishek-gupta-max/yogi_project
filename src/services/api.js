import axios from 'axios';

// Contact/email server. Empty = same origin (Vite dev proxy forwards /api to localhost:5000)
const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || '';

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
};
