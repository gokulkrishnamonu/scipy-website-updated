import { motion } from 'motion/react';
import { Link } from 'react-router';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Software Development',
      'AI Solutions',
      'Web Development',
      'Mobile Apps',
      'Cloud Solutions',
      'DevOps',
    ],
    products: [
      'Ticketing System',
      'Billing Software',
      'Job Recommendation',
      'HR Management',
      'CBCT Rendering',
    ],
    company: [
      'About Us',
      'Careers',
      'Blog',
      'Case Studies',
      'Contact',
    ],
    resources: [
      'Documentation',
      'Support',
      'Privacy Policy',
      'Terms of Service',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/scipytechnologies', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://instagram.com/scipytechnologies', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: 'https://linkedin.com/company/scipytechnologies', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: MessageCircle, href: 'https://wa.me/917356238071', label: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: Twitter, href: 'https://twitter.com/scipytech', label: 'Twitter', color: 'hover:text-sky-400' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>S</span>
                </div>
                <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Scipy <span className="font-normal">Technologies</span>
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Engineering intelligent digital solutions that transform businesses through innovation,
                technology, and excellence.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:hello@scipytechnologies.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>hello@scipytechnologies.com</span>
                </a>
                <a href="mailto:hr@scipytechnologies.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>hr@scipytechnologies.com</span>
                </a>
                <a href="tel:+917356238071" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <span style={{ fontFamily: 'Inter, sans-serif' }}>+91 73562 38071</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>🇮🇳 India</p>
                    <p>🇦🇪 UAE</p>
                    <p>🇺🇸 USA</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Products */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Products
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#products"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Newsletter
              </h4>
              <p className="text-gray-400 mb-4 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Subscribe to get latest updates and news.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
                <button className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-sm"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            © {currentYear} Scipy Technologies. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}