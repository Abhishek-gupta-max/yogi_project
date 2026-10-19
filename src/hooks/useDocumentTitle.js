import { useEffect } from 'react';
import { SITE } from '../constants';

// Finds <meta name|property="..."> (or <link rel="...">) in <head>, creating it if missing
function upsertHeadTag(tag, keyAttr, key, valueAttr, value) {
  let el = document.head.querySelector(`${tag}[${keyAttr}="${key}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(keyAttr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

/**
 * Per-page SEO: title, meta description, canonical URL, Open Graph / Twitter tags and robots.
 * @param {string} title - Full page title (shown as-is).
 * @param {string} description - Meta description for the page.
 * @param {{ noindex?: boolean }} [options] - noindex for pages that shouldn't appear in search (e.g. 404).
 */
export default function useDocumentTitle(title, description, { noindex = false } = {}) {
  useEffect(() => {
    const pageTitle = title || SITE.defaultTitle;
    const pageDescription = description || SITE.defaultDescription;
    const canonicalUrl = `${SITE.url}${window.location.pathname === '/' ? '/' : window.location.pathname}`;

    document.title = pageTitle;
    upsertHeadTag('meta', 'name', 'description', 'content', pageDescription);
    upsertHeadTag('meta', 'name', 'robots', 'content', noindex ? 'noindex, follow' : 'index, follow');
    upsertHeadTag('link', 'rel', 'canonical', 'href', canonicalUrl);

    upsertHeadTag('meta', 'property', 'og:title', 'content', pageTitle);
    upsertHeadTag('meta', 'property', 'og:description', 'content', pageDescription);
    upsertHeadTag('meta', 'property', 'og:url', 'content', canonicalUrl);
    upsertHeadTag('meta', 'property', 'og:image', 'content', `${SITE.url}${SITE.ogImage}`);
    upsertHeadTag('meta', 'name', 'twitter:title', 'content', pageTitle);
    upsertHeadTag('meta', 'name', 'twitter:description', 'content', pageDescription);
  }, [title, description, noindex]);
}
