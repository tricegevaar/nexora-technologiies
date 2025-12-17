"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Nexora delivered an outstanding product that exceeded our expectations. The team was professional and communicative at every step.",
    author: "Mark",
    role: "COO, GrowthLab SA",
    initials: "M",
  },
  {
    content: "Their expertise helped us scale our platform rapidly. Highly recommend their development and consulting services.",
    author: "Twice Seopela",
    role: "COO, Tshwane South Tvet College",
    initials: "TS",
  },
  {
    content: "Great collaboration and timely delivery. The final product improved our UX and conversions significantly.",
    author: "Tebogo Madileng",
    role: "CEO, Snape & Alphadot X",
    initials: "TM",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-blue" style={{ padding: "100px 0" }}>
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
          <div className="glass-card rounded-2xl text-center relative" style={{ padding: "40px 30px" }}>
            <div className="absolute top-6 left-6 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Quote size={18} className="text-cyan-400" />
            </div>

            <div className="pt-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].content}&rdquo;
              </p>

              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-white font-semibold text-sm mb-3">
                  {testimonials[current].initials}
                </div>
                <h4 className="text-white font-semibold">{testimonials[current].author}</h4>
                <p className="text-white/40 text-sm">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
