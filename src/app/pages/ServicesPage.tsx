import { Layout } from '../components/Layout';
import { Services } from '../components/Services';
import { TechStack } from '../components/TechStack';
import { CTA } from '../components/CTA';
import { motion } from 'motion/react';

export function ServicesPage() {
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
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              Comprehensive IT solutions tailored to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      <Services />
      <TechStack />
      <CTA />
    </Layout>
  );
}
