import { motion } from 'motion/react';
import { Zap, Shield, TrendingUp, Headphones, Lightbulb } from 'lucide-react';

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Zap,
      title: 'Agile Development',
      description: 'Fast iterations with continuous delivery and adaptive planning for rapid time-to-market.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Secure Architecture',
      description: 'Enterprise-grade security with best practices, encryption, and compliance standards.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business, handling millions of users and transactions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Headphones,
      title: 'Dedicated Support',
      description: '24/7 technical support and maintenance to ensure your systems run smoothly.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Focused',
      description: 'Leveraging cutting-edge technologies to give you a competitive advantage.',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const stats = [
    { number: '7+', label: 'Years of Excellence', gradient: 'from-blue-600 to-cyan-500' },
    { number: '25+', label: 'Expert Team Members', gradient: 'from-indigo-600 to-purple-500' },
    { number: '500+', label: 'Projects Delivered', gradient: 'from-cyan-500 to-blue-600' },
    { number: '99%', label: 'Client Satisfaction', gradient: 'from-green-500 to-emerald-600' },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white dark:bg-gray-900">
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
            Why Choose Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Scipy Advantage
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            What sets us apart in the competitive technology landscape
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 items centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {reasons.slice(3).map((reason, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 3) * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {reason.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
