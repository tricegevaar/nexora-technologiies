"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const pillars = [
  { icon: Shield, label: "Secure & Reliable" },
  { icon: Zap, label: "Scalable Solutions" },
  { icon: Users, label: "Expert Team" },
];

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #071526 0%, #0d1f3a 50%, #071526 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "10%", left: "10%", width: "400px", height: "400px", background: "radial-gradient(ellipse, rgba(11,77,255,0.18) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div style={{ position: "absolute", bottom: "10%", right: "10%", width: "350px", height: "350px", background: "radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="container max-w-4xl relative" style={{ zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{
              background: "rgba(0,180,255,0.08)",
              border: "1px solid rgba(0,180,255,0.2)",
              padding: "6px 16px",
              borderRadius: "50px",
            }}
          >
            <span style={{ color: "#00B4FF", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Ready to start your journey?
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            Let&apos;s build something{" "}
            <span className="gradient-text">extraordinary</span>
            {" "}together
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "rgba(183,195,208,0.8)",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "560px",
              margin: "0 auto 40px",
            }}
          >
            Let&apos;s discuss how we can help your business scale. Get a free consultation with our expert team and discover what&apos;s possible.
          </p>

          <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: "50px" }}>
            <Link
              href="/contact"
              className="btn-primary group"
              style={{ fontSize: "1rem", padding: "16px 32px" }}
            >
              Book a Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-secondary"
              style={{ fontSize: "1rem", padding: "16px 32px" }}
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {pillars.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={16} style={{ color: "#00B4FF" }} />
                <span style={{ color: "rgba(183,195,208,0.7)", fontSize: "0.85rem", fontWeight: 500 }}>
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
