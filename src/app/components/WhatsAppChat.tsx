import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const whatsappNumber = '917356238071'; // +91 7356238071

  const defaultMessage = 'Hi! I would like to know more about your services.';

  const handleSendMessage = () => {
    const textToSend = message.trim() || defaultMessage;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
    setMessage('');
  };

  const quickMessages = [
    'I need help with a project',
    'Tell me about your services',
    'I want to discuss pricing',
    'Schedule a consultation',
  ];

  const handleQuickMessage = (msg: string) => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Widget */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-96 z-50 shadow-2xl"
            >
              <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Chat with us
                      </h3>
                      <p className="text-xs opacity-90" style={{ fontFamily: 'Inter, sans-serif' }}>
                        We typically reply instantly
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body */}
                <div className="p-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 max-h-[60vh] overflow-y-auto">
                  {/* Welcome Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-4"
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-tl-none p-4 shadow-md border border-gray-100 dark:border-gray-600">
                      <p className="text-gray-800 dark:text-gray-200 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                        👋 Hi there! Welcome to <span className="font-semibold text-blue-600 dark:text-cyan-400">Scipy Technologies</span>.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        How can we help you today?
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 ml-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Just now
                    </p>
                  </motion.div>

                  {/* Quick Reply Buttons */}
                  <div className="space-y-2 mb-4">
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Quick replies:
                    </p>
                    {quickMessages.map((msg, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                        onClick={() => handleQuickMessage(msg)}
                        className="w-full text-left px-4 py-3 rounded-xl bg-white dark:bg-gray-700 border-2 border-green-200 dark:border-green-800 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-gray-600 transition-all text-sm text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {msg}
                      </motion.button>
                    ))}
                  </div>

                  {/* Custom Message Input */}
                  <div className="space-y-2">
                    <p className="text-xs text-gray-600 dark:text-gray-400 font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Or type your message:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-green-500 dark:focus:border-green-500 transition-colors text-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSendMessage}
                        className="px-4 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white transition-colors shadow-lg hover:shadow-xl"
                        aria-label="Send message"
                      >
                        <Send className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Online</span>
                    </div>
                    <span>•</span>
                    <span>Powered by WhatsApp</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-4 md:right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Open WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold shadow-lg"
          >
            1
          </motion.div>
        )}

        {/* Pulse Effect */}
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-green-400"
          />
        )}
      </motion.button>

      {/* Tooltip */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="hidden lg:block fixed bottom-8 right-24 z-40"
        >
          <div className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl text-sm whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
            Need help? Chat with us!
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900 dark:border-l-gray-800"></div>
          </div>
        </motion.div>
      )}
    </>
  );
}
