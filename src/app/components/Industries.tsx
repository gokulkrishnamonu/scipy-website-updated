import { motion } from 'motion/react';
import {
  Landmark,
  Heart,
  GraduationCap,
  ShoppingBag,
  Truck,
  Building2,
} from 'lucide-react';

export function Industries() {
  const industries = [
    {
      icon: Landmark,
      name: 'Finance',
      description: 'Banking, FinTech, Investment',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Heart,
      name: 'Healthcare',
      description: 'Medical, Pharma, Wellness',
      gradient: 'from-rose-500 to-pink-500',
    },
    {
      icon: GraduationCap,
      name: 'Education',
      description: 'E-learning, EdTech, Training',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: ShoppingBag,
      name: 'Retail',
      description: 'E-commerce, POS, Inventory',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Truck,
      name: 'Logistics',
      description: 'Supply Chain, Transport',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      icon: Building2,
      name: 'Government',
      description: 'Public Sector, Administration',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
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
            Industries We Serve
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Diverse Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Delivering specialized solutions across multiple sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative text-center space-y-4">
                  {/* Icon */}
                  <div className="inline-block">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {industry.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/20 to-transparent rounded-bl-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
