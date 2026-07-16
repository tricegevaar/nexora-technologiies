"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Nexora delivered an outstanding product that exceeded our expectations. The team was professional, communicative and technically excellent at every step.",
    author: "Mark",
    role: "COO, GrowthLab SA",
    initials: "M",
  },
  {
    content: "Their expertise helped us scale our platform rapidly. The technical depth and strategic thinking from Nexora's team was genuinely impressive.",
    author: "Twice Seopela",
    role: "COO, Tshwane South Tvet College",
    initials: "TS",
  },
  {
    content: "Great collaboration and timely delivery. The final product dramatically improved our UX and conversion metrics significantly.",
    author: "Tebogo Madileng",
    role: "CEO, Snape & Alphadot X",
    initials: "TM",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section style={{ background: "var(--dark-bg)", padding: "100px 0" }}>
      <div className="container max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="section-title">
            What Clients <span className="gradient-text-static">Say</span>
          </h2>
          <p className="section-subtitle">
            Real feedback from businesses we&apos;ve helped succeed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div
            style={{
              background: "rgba(11,77,255,0.06)",
              border: "1px solid rgba(0,180,255,0.15)",
              borderRadius: "24px",
              padding: "48px 40px",
              position: "relative",
              textAlign: "center",
            }}
          >
            {/* Quote icon */}
            <div
              style={{
                position: "absolute",
                top: "24px",
                left: "28px",
                width: "40px",
                height: "40px",
                background: "rgba(0,180,255,0.1)",
                border: "1px solid rgba(0,180,255,0.2)",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Quote size={16} style={{ color: "#00B4FF" }} />
            </div>

            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.8,
                fontStyle: "italic",
                marginBottom: "36px",
                paddingTop: "16px",
              }}
            >
              &ldquo;{testimonials[current].content}&rdquo;
            </motion.p>

            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #0B4DFF, #00B4FF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  marginBottom: "12px",
                  boxShadow: "0 4px 20px rgba(11,77,255,0.4)",
                }}
              >
                {testimonials[current].initials}
              </div>
              <h4 style={{ color: "white", fontWeight: 600, fontSize: "1rem" }}>
                {testimonials[current].author}
              </h4>
              <p style={{ color: "rgba(183,195,208,0.5)", fontSize: "0.85rem", marginTop: "4px" }}>
                {testimonials[current].role}
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4" style={{ marginTop: "32px" }}>
            <button
              onClick={prev}
              style={{
                width: "40px", height: "40px",
                borderRadius: "50%",
                background: "rgba(11,77,255,0.08)",
                border: "1px solid rgba(0,180,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(183,195,208,0.6)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00B4FF"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(183,195,208,0.6)"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.15)"; }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: "8px",
                    width: i === current ? "24px" : "8px",
                    borderRadius: "4px",
                    background: i === current ? "#00B4FF" : "rgba(255,255,255,0.15)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: "40px", height: "40px",
                borderRadius: "50%",
                background: "rgba(11,77,255,0.08)",
                border: "1px solid rgba(0,180,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(183,195,208,0.6)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#00B4FF"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(183,195,208,0.6)"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.15)"; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
