"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "27848744120";

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Nexora! I'd like to discuss a project with your team.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-green-500"
        />
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full flex items-center justify-center text-white"
          style={{
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            boxShadow: "0 8px 28px rgba(37, 211, 102, 0.45)",
          }}
          aria-label="Open WhatsApp chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <WhatsAppIcon />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="fixed bottom-24 right-6 z-50"
            style={{ width: "320px", maxWidth: "calc(100vw - 2rem)" }}
          >
            <div
              style={{
                background: "linear-gradient(160deg, #0f1e2e 0%, #12283b 100%)",
                border: "1px solid rgba(37, 211, 102, 0.15)",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Header */}
              <div
                style={{
                  padding: "20px 22px 18px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(37, 211, 102, 0.06)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #25d366, #128c7e)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(37, 211, 102, 0.3)",
                    }}
                  >
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-white font-semibold" style={{ fontSize: "15px", lineHeight: 1.3 }}>Nexora Technologies</p>
                    <div className="flex items-center gap-1.5" style={{ marginTop: "3px" }}>
                      <motion.span
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#25d366", display: "inline-block" }}
                      />
                      <span style={{ color: "#25d366", fontSize: "12px", fontWeight: 500 }}>Online</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-auto text-white/30 hover:text-white/70 transition-colors"
                    aria-label="Close"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Message bubble */}
              <div style={{ padding: "20px 22px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "4px 14px 14px 14px",
                    padding: "14px 16px",
                    marginBottom: "20px",
                  }}
                >
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "1.6", margin: 0 }}>
                    👋 Hi there! Ready to take your business to the next level?
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: "1.6", marginTop: "8px", marginBottom: 0 }}>
                    Chat with our team on WhatsApp — we typically reply within minutes.
                  </p>
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center justify-center gap-2 font-semibold text-white"
                  style={{
                    padding: "14px 20px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #25d366, #128c7e)",
                    fontSize: "14px",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(37, 211, 102, 0.3)",
                    marginBottom: "12px",
                  }}
                >
                  <WhatsAppIcon />
                  Start a Conversation
                  <ArrowRight size={15} />
                </motion.button>

                <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "11px", textAlign: "center", margin: 0 }}>
                  🔒 Secure &amp; private — powered by WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
