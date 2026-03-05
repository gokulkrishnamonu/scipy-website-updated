import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

export function CTA() {
  const navigate = useNavigate();
  
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500"></div>

      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Ready to Transform Your Business?
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Let's Build the Future
            <br />
            <span className="text-cyan-200">Together</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Partner with us to create innovative, scalable, and secure technology solutions
            that drive growth and competitive advantage.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="group px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-12 text-white/80"
          >
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>✓</div>
              <div className="text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>✓</div>
              <div className="text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Fast Response</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>✓</div>
              <div className="text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Expert Team</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
