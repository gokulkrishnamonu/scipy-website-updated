import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Clients } from '../components/Clients';
import { Certifications } from '../components/Certifications';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';
import { generateOrganizationSchema, generateWebsiteSchema } from '../utils/seoData';

export function HomePage() {
  return (
    <Layout>
      <SEO
        title="Scipy Technologies | AI, Cloud Computing & Software Development Solutions"
        description="Transform your business with cutting-edge AI, cloud computing, and software development solutions. Scipy Technologies offers enterprise automation, SaaS products, and digital transformation services globally."
        keywords={[
          'AI solutions',
          'artificial intelligence',
          'cloud computing',
          'software development',
          'digital transformation',
          'SaaS products',
          'enterprise automation',
          'machine learning',
          'web development',
          'mobile app development',
          'DevOps',
          'India',
          'UAE',
          'USA'
        ]}
        canonical="https://scipytechnologies.com/"
        structuredData={[generateOrganizationSchema(), generateWebsiteSchema()]}
      />
      <Hero />
      <Clients />
      <Certifications />
      <WhyChooseUs />
      <CTA />
    </Layout>
  );
}