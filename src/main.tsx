import { render } from 'preact';
import './index.css';
import { App } from './app.tsx';
import { siteMetadata } from './metadata';

// Add meta tags dynamically
const addMetaTags = () => {
    const head = document.head;

    // Update title
    document.title = siteMetadata.title;

    // Helper function to create or update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
        const attribute = isProperty ? 'property' : 'name';
        let meta = head.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attribute, name);
            head.appendChild(meta);
        }
        meta.content = content;
    };

    // Standard meta tags
    setMetaTag('description', siteMetadata.description);
    setMetaTag('keywords', siteMetadata.keywords);
    setMetaTag('author', siteMetadata.author);
    setMetaTag('theme-color', siteMetadata.themeColor);

    // Open Graph meta tags
    setMetaTag('og:title', siteMetadata.ogTitle, true);
    setMetaTag('og:description', siteMetadata.ogDescription, true);
    setMetaTag('og:type', siteMetadata.ogType, true);
    setMetaTag('og:image', `${siteMetadata.siteUrl}${siteMetadata.ogImage}`, true);
    setMetaTag('og:url', siteMetadata.siteUrl, true);
    setMetaTag('og:locale', siteMetadata.locale, true);

    // Twitter Card meta tags
    setMetaTag('twitter:card', siteMetadata.twitterCard);
    setMetaTag('twitter:site', siteMetadata.twitterSite);
    setMetaTag('twitter:title', siteMetadata.ogTitle);
    setMetaTag('twitter:description', siteMetadata.ogDescription);
    setMetaTag('twitter:image', `${siteMetadata.siteUrl}${siteMetadata.ogImage}`);

    // Add canonical link
    let canonical = head.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        head.appendChild(canonical);
    }
    canonical.href = siteMetadata.siteUrl;
};

// Add meta tags before rendering
addMetaTags();

render(<App />, document.getElementById('app')!);
