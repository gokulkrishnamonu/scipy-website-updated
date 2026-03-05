import { motion } from 'motion/react';

export function TechStack() {
  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'Redis', color: '#DC382D' },
    { name: 'Kubernetes', color: '#326CE5' },
    { name: 'TensorFlow', color: '#FF6F00' },
  ];

  return (
    <section id="tech-stack" className="py-24 bg-white dark:bg-gray-900">
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
            Technology Stack
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Powered by Modern Tech
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            We leverage cutting-edge technologies to build robust solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="h-32 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center">
                {/* Logo Circle */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${tech.color}15`,
                    border: `2px solid ${tech.color}30`,
                  }}
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ color: tech.color, fontFamily: 'Poppins, sans-serif' }}
                  >
                    {tech.name.charAt(0)}
                  </span>
                </div>

                {/* Tech Name */}
                <span className="text-sm font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
            And many more cutting-edge technologies tailored to your project needs
          </p>
        </motion.div>
      </div>
    </section>
  );
}
