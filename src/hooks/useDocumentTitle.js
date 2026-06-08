import { useEffect } from 'react';

/**
 * Custom hook to dynamically manage the document title and meta description for SEO.
 * @param {string} title - The title of the page.
 * @param {string} description - The meta description of the page.
 */
export default function useDocumentTitle(title, description) {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title 
      ? `${title} | Shift Ahead Technologies` 
      : 'Shift Ahead Technologies | Enterprise IT Services & Managed Solutions';
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    const fallbackDescription = description || 'Shift Ahead Technologies provides state-of-the-art managed IT, telecom, automated DevOps, NOC surveillance, and AIOps predictive solutions globally.';
    metaDescription.setAttribute('content', fallbackDescription);
  }, [title, description]);
}
