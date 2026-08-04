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
    <section style={{ background: "#111114", padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: "840px" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "52px" }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "5px 14px", borderRadius: "50px", marginBottom: "20px" }}>
            <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Client Voices</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.15, letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
            What Our{" "}
            <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Clients Say
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div style={{
            background: "#16161A",
            border: "1px solid rgba(201,168,76,0.12)",
            borderRadius: "20px",
            padding: "48px 40px",
            position: "relative",
            textAlign: "center",
          }}>
            {/* Top gold accent */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60px", height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", borderRadius: "2px" }} />

            {/* Quote icon */}
            <div style={{
              position: "absolute", top: "24px", left: "28px",
              width: "36px", height: "36px",
              background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Quote size={15} style={{ color: "#C9A84C" }} />
            </div>

            <motion.p
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: "1.05rem", color: "rgba(244,240,232,0.8)",
                lineHeight: 1.85, fontStyle: "italic",
                marginBottom: "36px", paddingTop: "12px",
                maxWidth: "600px", margin: "0 auto 36px",
              }}
            >
              &ldquo;{testimonials[current].content}&rdquo;
            </motion.p>

            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div style={{
                width: "46px", height: "46px", borderRadius: "50%",
                background: "linear-gradient(135deg, #A07830, #C9A84C)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#0A0A0B", fontWeight: 800, fontSize: "0.85rem",
                marginBottom: "10px",
                boxShadow: "0 4px 16px rgba(201,168,76,0.3)",
              }}>
                {testimonials[current].initials}
              </div>
              <h4 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "0.95rem", margin: 0 }}>
                {testimonials[current].author}
              </h4>
              <p style={{ color: "rgba(220,210,190,0.4)", fontSize: "0.82rem", marginTop: "4px" }}>
                {testimonials[current].role}
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "28px" }}>
            <button
              onClick={prev}
              style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(220,210,190,0.5)", cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "rgba(201,168,76,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(220,210,190,0.5)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
            >
              <ChevronLeft size={17} />
            </button>

            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    height: "6px", width: i === current ? "22px" : "6px",
                    borderRadius: "3px",
                    background: i === current ? "#C9A84C" : "rgba(220,210,190,0.15)",
                    border: "none", cursor: "pointer", transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{ width: "38px", height: "38px", borderRadius: "50%", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(220,210,190,0.5)", cursor: "pointer", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "rgba(201,168,76,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(220,210,190,0.5)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)"; e.currentTarget.style.background = "rgba(201,168,76,0.06)"; }}
            >
              <ChevronRight size={17} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
