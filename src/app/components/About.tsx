import { motion } from 'motion/react';
import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To be the global leader in delivering transformative technology solutions that empower businesses.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'Constantly pushing boundaries with cutting-edge technologies and creative problem-solving.',
    },
    {
      icon: Users,
      title: 'Client-First',
      description: 'Building lasting partnerships through transparent communication and exceptional service delivery.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Scalable solutions designed to grow with your business and adapt to market changes.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
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
            About Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Scipy Technologies
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            An innovative IT solutions company transforming businesses through technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NzE1MzIwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/20"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-blue-400 via-indigo-400 to-cyan-400 rounded-2xl opacity-20 blur-3xl -z-10"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Leading the Digital Transformation Journey
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Scipy Technologies is at the forefront of digital innovation, offering comprehensive IT solutions
              that span from AI and machine learning to enterprise automation and cloud infrastructure.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              We serve startups, enterprises, SMEs, and government organizations worldwide, delivering solutions
              that are not just technically excellent but also business-driven and results-oriented.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-100 dark:border-blue-900">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400" style={{ fontFamily: 'Poppins, sans-serif' }}>7+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Years Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950 dark:to-cyan-950 border border-indigo-100 dark:border-indigo-900">
                <div className="text-3xl font-bold text-indigo-600 dark:text-cyan-400" style={{ fontFamily: 'Poppins, sans-serif' }}>25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Expert Team</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 border border-blue-100 dark:border-blue-900 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
