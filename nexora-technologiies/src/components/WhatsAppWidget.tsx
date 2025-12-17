"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "27848744120";
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your services. Can we discuss my project?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 whatsapp-mobile"
      >
        {/* Pulse Animation Ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-green-500 rounded-full"
        />
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300"
          style={{ 
            boxShadow: "0 8px 32px rgba(34, 197, 94, 0.4)",
            border: "2px solid rgba(255, 255, 255, 0.2)"
          }}
        >
          {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
        </motion.button>
      </motion.div>

      {/* WhatsApp Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-28 right-6 z-50 w-[340px] max-w-[calc(100vw-3rem)]"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}>
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                <div className="flex items-center gap-3 relative z-10">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <MessageCircle size={24} className="text-green-500" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Nexora Support</h3>
                    <div className="flex items-center gap-1.5">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-300 rounded-full"
                      />
                      <p className="text-white/90 text-sm font-medium">Online now</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-gradient-to-b from-gray-50 to-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100"
                >
                  <p className="text-gray-700 text-sm leading-relaxed mb-2">
                    👋 <strong>Hello!</strong> Welcome to Nexora.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    How can we help you today? Our team is ready to discuss your project!
                  </p>
                </motion.div>
                
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-5 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}
                >
                  <MessageCircle size={20} />
                  Start Chat on WhatsApp
                </motion.button>
                
                <p className="text-gray-400 text-xs text-center mt-3 flex items-center justify-center gap-1">
                  <span>🔒</span>
                  <span>Secure & Private Conversation</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}