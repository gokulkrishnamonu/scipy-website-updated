// SEO Sitemap Data for Scipy Technologies
// This helps search engines understand the site structure

export const sitemapData = {
  site: {
    name: 'Scipy Technologies',
    url: 'https://scipytechnologies.com',
    description: 'Leading IT solutions provider specializing in AI, Cloud Computing, Software Development, and Digital Transformation services.',
    foundingYear: 2020,
    locations: ['India', 'UAE', 'USA'],
  },
  
  pages: [
    {
      url: '/',
      title: 'Home - Scipy Technologies | AI & Digital Transformation Solutions',
      description: 'Transform your business with cutting-edge AI, cloud computing, and software development solutions from Scipy Technologies.',
      priority: 1.0,
      changeFreq: 'daily',
    },
    {
      url: '/about',
      title: 'About Us - Scipy Technologies | Company Profile & Mission',
      description: 'Learn about Scipy Technologies, our mission, values, certifications, and global presence across India, UAE, and USA.',
      priority: 0.9,
      changeFreq: 'monthly',
    },
    {
      url: '/services',
      title: 'Services - Scipy Technologies | IT Solutions & Development',
      description: 'Explore our comprehensive IT services including AI solutions, cloud computing, software development, DevOps, and more.',
      priority: 0.9,
      changeFreq: 'weekly',
    },
    {
      url: '/products',
      title: 'Products - Scipy Technologies | SaaS Solutions',
      description: 'Discover our innovative SaaS products including ticketing systems, billing software, HR management, and job recommendation platforms.',
      priority: 0.8,
      changeFreq: 'weekly',
    },
    {
      url: '/portfolio',
      title: 'Portfolio - Scipy Technologies | Case Studies & Success Stories',
      description: 'View our successful projects, client testimonials, and case studies demonstrating our expertise in digital transformation.',
      priority: 0.8,
      changeFreq: 'monthly',
    },
    {
      url: '/blog',
      title: 'Blog - Scipy Technologies | Tech Insights & Industry Trends',
      description: 'Expert insights on AI, cloud computing, software development, cybersecurity, and emerging technologies.',
      priority: 0.9,
      changeFreq: 'daily',
    },
    {
      url: '/contact',
      title: 'Contact Us - Scipy Technologies | Get In Touch',
      description: 'Contact Scipy Technologies for AI solutions, software development, and digital transformation services. Available in India, UAE, USA.',
      priority: 0.7,
      changeFreq: 'monthly',
    },
  ],

  services: [
    'Artificial Intelligence Solutions',
    'Machine Learning Development',
    'Cloud Computing Services',
    'Software Development',
    'Mobile App Development',
    'Web Application Development',
    'DevOps & CI/CD',
    'Enterprise Automation',
    'Digital Transformation Consulting',
    'Cybersecurity Solutions',
    'Data Analytics & BI',
    'IoT Solutions',
  ],

  industries: [
    'Healthcare',
    'Finance & Banking',
    'E-commerce & Retail',
    'Education',
    'Manufacturing',
    'Logistics & Transportation',
    'Real Estate',
    'Government & Public Sector',
  ],

  technologies: [
    'React', 'Next.js', 'Node.js', 'Python', 'TensorFlow', 'PyTorch',
    'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
    'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST API',
  ],

  blogCategories: [
    'Artificial Intelligence',
    'Cloud Solutions',
    'Software Development',
    'DevOps',
    'Security',
    'Mobile Development',
    'Data Analytics',
    'Digital Transformation',
    'Blockchain',
  ],

  certifications: [
    'Startup India Certified',
    'AIBA QMS Accredited',
    'Kerala Startup Mission',
    'NASSCOM Member',
    'TechBehemoths Awards 2024 Winner',
    'ISO 9001:2015 Certified',
  ],

  keywords: {
    primary: [
      'AI solutions',
      'artificial intelligence',
      'cloud computing',
      'software development',
      'digital transformation',
      'machine learning',
      'enterprise software',
      'SaaS products',
    ],
    secondary: [
      'IT consulting',
      'DevOps services',
      'mobile app development',
      'web application development',
      'business automation',
      'data analytics',
      'cybersecurity',
      'cloud migration',
    ],
    location: [
      'India',
      'UAE',
      'USA',
      'Kerala',
      'Dubai',
      'San Francisco',
    ],
  },

  socialMedia: {
    linkedin: 'https://linkedin.com/company/scipy-technologies',
    twitter: 'https://twitter.com/scipytech',
    facebook: 'https://facebook.com/scipytechnologies',
    instagram: 'https://instagram.com/scipytech',
    github: 'https://github.com/scipytech',
  },

  contact: {
    email: 'hello@scipytechnologies.com',
    hrEmail: 'hr@scipytechnologies.com',
    phone: '+917356238071',
  },
};

// Generate structured data for SEO (JSON-LD)
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Scipy Technologies",
    "alternateName": "SciPy Tech",
    "url": "https://scipytechnologies.com",
    "logo": "https://scipytechnologies.com/logo.png",
    "description": sitemapData.site.description,
    "foundingDate": sitemapData.site.foundingYear.toString(),
    "address": [
      {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "Kerala"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "AE"
      },
      {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": sitemapData.contact.phone,
      "email": sitemapData.contact.email,
      "contactType": "customer service",
      "availableLanguage": ["English", "Arabic", "Spanish", "French", "German"]
    },
    "sameAs": Object.values(sitemapData.socialMedia),
    "areaServed": ["IN", "AE", "US", "Worldwide"],
    "knowsAbout": sitemapData.services,
    "award": sitemapData.certifications,
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Scipy Technologies",
    "url": "https://scipytechnologies.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://scipytechnologies.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://scipytechnologies.com${item.url}`
    }))
  };
};
