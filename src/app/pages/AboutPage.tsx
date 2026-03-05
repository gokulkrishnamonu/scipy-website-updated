import { Layout } from '../components/Layout';
import { About } from '../components/About';
import { Industries } from '../components/Industries';
import { TechStack } from '../components/TechStack';
import { Certifications } from '../components/Certifications';
import { CTA } from '../components/CTA';
import { motion } from 'motion/react';

export function AboutPage() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                About
              </span>{' '}
              Scipy Technologies
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Pioneering digital transformation with innovative technology solutions
            </p>
          </motion.div>
        </div>
      </section>

      <About />
      <Certifications />
      <Industries />
      <TechStack />
      <CTA />
    </Layout>
  );
}