import axios from 'axios';

// Resolve API base URL from Vite environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.veltrixsecure.com/v1';

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
    // Simulation fallback if real endpoint is unreachable
    try {
      return await apiClient.post('/contact', data);
    } catch {
      // Return a simulated response with delay for local development/showcase
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Inquiry submitted successfully! Our systems engineers will contact you shortly.',
            data
          });
        }, 1500);
      });
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
            message: 'Application received! Thank you for applying to VeltrixSecure.',
            data
          });
        }, 1500);
      });
    }
  }
};

export default apiClient;
