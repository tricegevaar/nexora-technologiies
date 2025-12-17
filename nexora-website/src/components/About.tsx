"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Users, Award } from "lucide-react";

const features = [
  { icon: Rocket, title: "Innovation First", desc: "We stay ahead of technology trends to deliver future-proof solutions." },
  { icon: Users, title: "Collaborative Approach", desc: "We work closely with clients to understand their unique challenges." },
  { icon: Award, title: "Quality Assurance", desc: "Rigorous testing ensures reliable, high-performance solutions." },
];

const stats = [
  { value: 95, label: "Projects", suffix: "+" },
  { value: 90, label: "Satisfaction", suffix: "%" },
  { value: 10, label: "Team", suffix: "+" },
  { value: 4, label: "Years", suffix: "+" },
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
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-blue" style={{ padding: "100px 0" }}>
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: "60px" }}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title" style={{ marginBottom: "15px" }}>
              Driving Digital <span className="gradient-text-static">Innovation</span>
            </h2>
            <p className="text-white/50 leading-relaxed" style={{ marginBottom: "40px" }}>
              Founded in 2022, Nexora has been at the forefront of digital transformation, helping businesses leverage technology for growth and success.
            </p>

            <div style={{ marginBottom: "40px" }}>
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  className="flex"
                  style={{ gap: "20px", marginBottom: "30px" }}
                >
                  <div className="icon-box-sm">
                    <feature.icon size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold" style={{ marginBottom: "8px" }}>{feature.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-4" style={{ gap: "30px" }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                  className="text-center"
                >
                  <div className="stat-number text-2xl sm:text-3xl" style={{ marginBottom: "5px" }}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/40 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-[#0a1628] border border-white/5 flex items-center justify-center">
                  <Users size={56} className="text-cyan-400/40" />
                </div>
              </div>
              <div className="absolute inset-[-30px] border border-dashed border-white/5 rounded-full animate-spin" style={{ animationDuration: "40s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
