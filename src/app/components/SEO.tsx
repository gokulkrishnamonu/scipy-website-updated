import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  author?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = 'https://scipytechnologies.com/og-image.png',
  author,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords.join(', ') },
      { name: 'author', content: author || 'Scipy Technologies' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: canonical || window.location.href },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Scipy Technologies' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:site', content: '@scipytech' },
      
      // Additional SEO
      { name: 'theme-color', content: '#2563eb' },
      { name: 'msapplication-TileColor', content: '#2563eb' },
    ];

    // Update or create meta tags
    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Canonical URL
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // Structured Data (JSON-LD)
    if (structuredData) {
      const scriptId = 'structured-data';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      
      script.text = JSON.stringify(structuredData);
    }

    // Cleanup function
    return () => {
      // Remove structured data on unmount if needed
      const script = document.getElementById('structured-data');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, canonical, ogType, ogImage, author, structuredData]);

  return null; // This component doesn't render anything
}
