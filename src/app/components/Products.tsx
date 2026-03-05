import { motion } from 'motion/react';
import { Ticket, Receipt, Briefcase, Users, FileBox, ArrowRight, Fuel, Brain, FolderOpen, Eye } from 'lucide-react';
import { useNavigate } from 'react-router';

export function Products() {
  const navigate = useNavigate();
  
  const products = [
    {
      icon: Fuel,
      title: 'Indhan X',
      description: 'Comprehensive fuel station management system with real-time inventory tracking, sales analytics, and automated billing for efficient operations.',
      color: 'orange',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Brain,
      title: 'Dento AI',
      description: 'AI-powered dental analysis platform for automated cavity detection, root canal identification, and comprehensive diagnostic reporting.',
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FolderOpen,
      title: 'Real CMS',
      description: 'Flexible content management system designed for seamless integration across every platform with intuitive editing and publishing workflows.',
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Eye,
      title: 'OptiVision',
      description: 'Next-generation computer vision library with automatic captioning, annotation, intelligent reporting, and advanced debugging capabilities.',
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Ticket,
      title: 'Ticketing System',
      description: 'Complete helpdesk and support ticket management with automated workflows and SLA tracking.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Receipt,
      title: 'Billing Software',
      description: 'Comprehensive invoicing and billing solution with automated payment processing and reporting.',
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Briefcase,
      title: 'Job Recommendation System',
      description: 'AI-powered job matching platform that connects talent with opportunities intelligently.',
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'HR & Management Software',
      description: 'End-to-end human resource management with payroll, attendance, and performance tracking.',
      color: 'pink',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: FileBox,
      title: 'CBCT Rendering Software',
      description: 'Advanced medical imaging software for dental and maxillofacial 3D visualization and analysis.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="products" className="py-24 bg-white dark:bg-gray-900">
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
            Our Products
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Flagship Solutions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready-to-deploy products built with cutting-edge technology
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {product.description}
                  </p>

                  {/* Learn More Button */}
                  <button 
                    onClick={() => navigate('/products')}
                    className="group/btn inline-flex items-center gap-2 text-blue-600 dark:text-cyan-400 font-semibold hover:gap-3 transition-all duration-300" 
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-16 -right-16 w-32 h-32 bg-gradient-to-br ${product.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Need a Custom Product Solution?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-blue-100" style={{ fontFamily: 'Inter, sans-serif' }}>
              We build custom SaaS products tailored to your specific business needs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Discuss Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
