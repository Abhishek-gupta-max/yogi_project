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
      ? `${title} | VeltrixSecure Technologies` 
      : 'VeltrixSecure Technologies LLP | Cybersecurity & Managed IT Services';
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    
    const fallbackDescription = description || 'VeltrixSecure Technologies LLP delivers intelligent cybersecurity, scalable technology solutions, cloud infrastructure, automation systems, and digital transformation services.';
    metaDescription.setAttribute('content', fallbackDescription);
  }, [title, description]);
}
