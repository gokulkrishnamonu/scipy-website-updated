import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router';

export function Portfolio() {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: 'Enterprise Resource Planning',
      category: 'Enterprise Software',
      description: 'Complete ERP system for manufacturing industry with inventory, procurement, and analytics.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzE2MDM3ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'AI-Powered Analytics Platform',
      category: 'Machine Learning',
      description: 'Advanced analytics platform with predictive modeling and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1587981861414-28de953da54a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnN8ZW58MXx8fHwxNzcxNTg4OTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Healthcare Management System',
      category: 'Healthcare',
      description: 'Comprehensive patient management system with telemedicine and appointment scheduling.',
      image: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBuZXR3b3JrfGVufDF8fHx8MTc3MTU3Nzk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
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
            Case Studies
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Explore our success stories and transformative solutions
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-lg bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-sm font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {project.category}
                  </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {project.description}
                </p>
              </div>

              {/* Bottom Gradient */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}></div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/portfolio')}
            className="px-8 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-cyan-400 font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
