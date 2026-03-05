import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

export function Clients() {
  const { t } = useTranslation();

  const clientLogos = [
    { name: 'PlanAFin', color: '#2563eb', logo: null },
    { name: 'DenStack', color: '#7c3aed', logo: null },
    { name: 'UK Ezhava Matrimony', color: '#dc2626', logo: null },
    { name: 'Finexia Marketing', color: '#059669', logo: null },
    { name: 'PAM LLC Dubai', color: '#ea580c', logo: null },
    { name: 'Maptell', color: '#0891b2', logo: null },
    { name: 'TGrade', color: '#4f46e5', logo: null },
    { name: 'Orion Club', color: '#06b6d4', logo: null },
    { name: 'Woodstone Builder & Developers', color: '#8b5cf6', logo: null },
    { name: 'Dooradharsan Kendram', color: '#ec4899', logo: null },
    { name: 'F12 Technologies', color: '#0ea5e9', logo: null },
    { name: 'Justyta LLC Dubai', color: '#f59e0b', logo: null },
  ];

  return (
    <section id="clients" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 dark:text-cyan-400 font-semibold tracking-wide uppercase text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t('ourClients')}
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {t('trustedByLeaders')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            {t('partneringWorldwide')}
          </p>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="h-32 p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      style={{
                        filter: 'grayscale(100%) opacity(0.7)',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'}
                      onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%) opacity(0.7)'}
                    />
                  ) : (
                    <div
                      className="text-center px-2"
                      style={{ 
                        color: client.color,
                        filter: 'grayscale(100%)',
                        transition: 'filter 0.3s',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                      onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                    >
                      <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {client.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 3)}
                      </div>
                      <div className="text-xs font-semibold leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {client.name}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '98%', label: t('clientRetentionRate') },
            { number: '4.9/5', label: t('averageRating') },
            { number: '200+', label: t('activeClients') },
            { number: '50+', label: t('countriesServed') },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-100 dark:border-blue-900"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
