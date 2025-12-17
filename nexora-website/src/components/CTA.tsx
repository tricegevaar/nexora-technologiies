"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="text-center cta-mobile" style={{ 
      padding: "100px 0",
      background: "linear-gradient(135deg, var(--royal-blue), var(--electric-cyan))",
      color: "white"
    }}>
      <div className="container max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-bold text-white" style={{ 
            fontSize: "2.5rem", 
            marginBottom: "20px",
            fontFamily: "'Playfair Display', serif"
          }}>
            Ready to Transform Your Business?
          </h2>
          <p className="text-center mx-auto" style={{ 
           
            fontSize: "1.1rem",
            marginBottom: "30px",
            opacity: "0.9",
            lineHeight: "1.6",
            padding: "0 20px",
            textAlign: "center"
          }}>
            Contact us today for a free consultation and let's discuss how we can help you achieve your digital goals.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-semibold transition-all group"
            style={{
              background: "white",
              color: "var(--royal-blue)",
              padding: "12px 24px",
              borderRadius: "10px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.9)";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Get Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
