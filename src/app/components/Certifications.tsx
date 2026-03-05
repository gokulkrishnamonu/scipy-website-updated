import { motion } from 'motion/react';
import { Award, Shield } from 'lucide-react';
import startupIndiaLogo from 'figma:asset/ea56e006c1d6c483638c59ab2378a407984afb57.png';
import aibaLogo from 'figma:asset/7bd4c05e17fdb6da01290ffbfb87f8f64be59c5d.png';
import keralaStartupLogo from 'figma:asset/f03af4cb470092a4b2713f981b08b2b5c1169c57.png';
import nasscomLogo from 'figma:asset/dab2b7bd8c4a30181b44c30cf06c027e1657802b.png';
import techbehemothsAward from 'figma:asset/c511607ad77422e9242884b3857bd4419535a2be.png';

export function Certifications() {
  const certifications = [
    {
      name: 'Startup India',
      logo: startupIndiaLogo,
      description: 'Recognized by Government of India',
    },
    {
      name: 'AIBA QMS Accredited',
      logo: aibaLogo,
      description: 'American International Bureau of Accreditation',
    },
    {
      name: 'Kerala Startup Mission',
      logo: keralaStartupLogo,
      description: 'Supported by Kerala Startup Mission',
    },
    {
      name: 'NASSCOM Member',
      logo: nasscomLogo,
      description: 'National Association of Software Companies',
    },
    {
      name: 'TechBehemoths Awards 2024',
      logo: techbehemothsAward,
      description: 'Winner for Artificial Intelligence Services',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-200 dark:border-blue-800 mb-4">
            <Award className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400" style={{ fontFamily: 'Inter, sans-serif' }}>
              Certifications & Recognition
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Trusted & <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Certified</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Backed by prestigious organizations and certifications that validate our commitment to excellence
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-950/30 border border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-sm border border-white/20 dark:border-gray-700/20"></div>
              
              <div className="relative z-10">
                {/* Logo Container */}
                <div className="flex items-center justify-center h-32 mb-6 p-4 rounded-xl bg-white dark:bg-gray-900/50 shadow-inner">
                  <img
                    src={cert.logo}
                    alt={cert.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Certification Name */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {cert.description}
                </p>

                {/* Badge Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-cyan-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-cyan-500/10 border border-blue-200 dark:border-blue-800">
            <Shield className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
            <span className="text-gray-700 dark:text-gray-300 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              ISO 9001:2015 Certified | GDPR Compliant | SOC 2 Type II Audited
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}