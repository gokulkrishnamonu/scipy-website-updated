import { motion } from 'motion/react';
import {
  Code2,
  Brain,
  Smartphone,
  Cloud,
  Shield,
  Palette,
  Workflow,
  Lock,
} from 'lucide-react';
import { useNavigate } from 'react-router';

export function Services() {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Code2,
      title: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your unique business requirements and workflows.',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Intelligent systems powered by advanced AI algorithms and machine learning models.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Responsive, user-friendly applications for web, iOS, and Android platforms.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Cloud,
      title: 'SaaS Product Development',
      description: 'Scalable cloud-based products with subscription models and multi-tenant architecture.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Workflow,
      title: 'DevOps & Cloud Solutions',
      description: 'Streamlined deployment pipelines and cloud infrastructure optimization.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Engineering',
      description: 'Beautiful, intuitive interfaces designed for optimal user experience and engagement.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Lock,
      title: 'Enterprise Automation',
      description: 'Intelligent automation solutions that reduce costs and improve operational efficiency.',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Shield,
      title: 'Cybersecurity & IT Consulting',
      description: 'Comprehensive security audits and strategic IT consulting services.',
      gradient: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
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
            Our Services
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Core Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Comprehensive IT solutions designed to accelerate your digital transformation
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/services')}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
