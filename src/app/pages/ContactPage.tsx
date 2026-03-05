import { Layout } from '../components/Layout';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ContactPage() {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                {t('getInTouchTitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t('letDiscuss')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border border-blue-100 dark:border-blue-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Email Us
                      </h3>
                      <a href="mailto:hello@scipytechnologies.com" className="text-blue-600 dark:text-cyan-400 hover:underline block mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        hello@scipytechnologies.com
                      </a>
                      <a href="mailto:hr@scipytechnologies.com" className="text-blue-600 dark:text-cyan-400 hover:underline block text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                        hr@scipytechnologies.com (HR Enquiries)
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950 border border-indigo-100 dark:border-indigo-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Call Us
                      </h3>
                      <a href="tel:+917356238071" className="text-indigo-600 dark:text-purple-400 hover:underline" style={{ fontFamily: 'Inter, sans-serif' }}>
                        +91 73562 38071
                      </a>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Available 24/7 for urgent inquiries
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border border-cyan-100 dark:border-cyan-900"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Our Locations
                      </h3>
                      <div className="space-y-1 text-gray-700 dark:text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <p className="font-semibold text-blue-600 dark:text-cyan-400">🇮🇳 India</p>
                        <p className="font-semibold text-blue-600 dark:text-cyan-400">🇦🇪 UAE</p>
                        <p className="font-semibold text-blue-600 dark:text-cyan-400">🇺🇸 USA</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border border-purple-100 dark:border-purple-900"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Connect With Us
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Follow us on social media for updates, insights, and industry news
                </p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://facebook.com/scipytechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/scipytechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/company/scipytechnologies"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-blue-700 hover:bg-blue-800 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/917356238071"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-green-600 hover:bg-green-700 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Send Us a Message
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Global Presence, Local Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
              We serve clients worldwide with offices in major tech hubs
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}