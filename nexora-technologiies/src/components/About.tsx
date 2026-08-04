"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, ShieldCheck, Cpu, Globe } from "lucide-react";

const features = [
  { icon: Rocket, title: "Innovation First", desc: "We stay ahead of technology trends to deliver future-proof, enterprise-grade solutions." },
  { icon: ShieldCheck, title: "Secure by Design", desc: "Security is built into every layer of our architecture from the ground up." },
  { icon: Cpu, title: "AI-Powered Solutions", desc: "We leverage AI and automation to drive operational efficiency and business growth." },
  { icon: Globe, title: "Cloud-First Approach", desc: "Scalable cloud infrastructure designed for performance, availability and scale." },
];

const stats = [
  { value: 120, label: "Projects Delivered", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
  { value: 12, label: "Enterprise Clients", suffix: "+" },
  { value: 5, label: "Years Experience", suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = value / 50;
      const timer = setInterval(() => {
        current += step;
        if (current >= value) { setCount(value); clearInterval(timer); }
        else { setCount(Math.floor(current)); }
      }, 25);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ background: "var(--deep-navy)", padding: "100px 0" }}>
      <div className="container" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "70px" }}
        >
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              background: "rgba(0,180,255,0.08)",
              border: "1px solid rgba(0,180,255,0.2)",
              padding: "6px 16px",
              borderRadius: "50px",
            }}
          >
            <span style={{ color: "#00B4FF", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Our Core Solutions
            </span>
          </div>
          <h2 className="section-title" style={{ marginBottom: "16px" }}>
            Technology solutions built<br />for the{" "}
            <span className="gradient-text">future</span>
          </h2>
          <p className="section-subtitle" style={{ maxWidth: "560px" }}>
            We combine innovation, strategy and engineering to deliver powerful digital solutions that solve real business problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 items-center" style={{ gap: "80px" }}>
          {/* Features grid */}
          <div className="grid grid-cols-2" style={{ gap: "24px" }}>
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  background: "rgba(11,77,255,0.06)",
                  border: "1px solid rgba(0,180,255,0.12)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ borderColor: "rgba(0,180,255,0.3)", y: -4 }}
              >
                <div
                  style={{
                    width: "44px", height: "44px",
                    background: "rgba(0,180,255,0.1)",
                    border: "1px solid rgba(0,180,255,0.2)",
                    borderRadius: "12px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: "16px",
                  }}
                >
                  <feature.icon size={20} style={{ color: "#00B4FF" }} />
                </div>
                <h4 style={{ color: "white", fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px" }}>
                  {feature.title}
                </h4>
                <p style={{ color: "rgba(183,195,208,0.65)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  {feature.desc}
                </p>
                <div
                  className="mt-3 flex items-center gap-1 text-xs font-medium"
                  style={{ color: "#00B4FF", cursor: "pointer" }}
                >
                  Learn more →
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2" style={{ gap: "24px" }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  style={{
                    background: "rgba(11,77,255,0.06)",
                    border: "1px solid rgba(0,180,255,0.12)",
                    borderRadius: "16px",
                    padding: "32px 24px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#00B4FF", lineHeight: 1, marginBottom: "8px" }}>
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: "rgba(183,195,208,0.7)", fontSize: "0.85rem", fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
