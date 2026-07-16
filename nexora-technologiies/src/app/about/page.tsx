"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Users, Award } from "lucide-react";

const stats = [
  { value: 150, label: "Projects", suffix: "+" },
  { value: 98, label: "Satisfaction", suffix: "%" },
  { value: 40, label: "Team", suffix: "+" },
  { value: 5, label: "Years", suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = value / 40;
      const timer = setInterval(() => {
        current += step;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden hero-mobile" style={{ padding: "160px 0 80px", background: "var(--dark-bg)" }}>
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #05070C 0%, #071526 60%, #05070C 100%)" }} />
          <motion.div animate={{ opacity: [0.2, 0.45, 0.2] }} transition={{ duration: 8, repeat: Infinity }} className="absolute" style={{ top: "10%", left: "5%", width: "50%", height: "60%", background: "radial-gradient(ellipse, rgba(11,77,255,0.15) 0%, transparent 70%)", filter: "blur(50px)" }} />
          <motion.div animate={{ opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 10, repeat: Infinity, delay: 2 }} className="absolute" style={{ bottom: "10%", right: "5%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,180,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 mb-8" style={{ background: "rgba(0,180,255,0.08)", border: "1px solid rgba(0,180,255,0.2)", padding: "6px 16px", borderRadius: "50px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#1DE9FF", boxShadow: "0 0 8px #1DE9FF", display: "inline-block" }} />
                <span style={{ color: "#1DE9FF", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>About Nexora Technologies</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 800, color: "white", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-0.02em" }}
              >
                Innovating <span className="gradient-text">Tomorrow&apos;s</span>
                <br />Digital Solutions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
                style={{ fontSize: "1.1rem", lineHeight: 1.7, color: "rgba(183,195,208,0.8)", maxWidth: "600px", margin: "0 auto", fontWeight: 400 }}
              >
                We are a passionate team of digital innovators, crafting cutting-edge solutions that transform businesses and drive sustainable growth in the digital age.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-blue" style={{ padding: "100px 0" }} ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: "60px" }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">
                Driving Digital <span className="gradient-text-static">Innovation</span>
              </h2>
              <p className="text-white/50 leading-relaxed" style={{ marginBottom: "20px" }}>
                Founded in 2022, Nexora has been at the forefront of digital transformation, helping businesses leverage technology for growth.
              </p>
              <p className="text-white/50 leading-relaxed" style={{ marginBottom: "40px" }}>
                Our team combines creativity with technical excellence to deliver solutions that exceed expectations.
              </p>

              <div>
                {[
                  { icon: Rocket, text: "Innovation First - Future-proof solutions" },
                  { icon: Users, text: "Collaborative - Your success is our priority" },
                  { icon: Award, text: "Quality - Excellence in every detail" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={text} className="flex items-center" style={{ gap: "20px", marginBottom: i < 2 ? "30px" : "0" }}>
                    <div className="icon-box-sm w-9 h-9">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <span className="text-white/60 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-2"
              style={{ gap: "30px" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl text-center" style={{ padding: "40px 30px" }}>
                  <div className="stat-number text-3xl mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
}
