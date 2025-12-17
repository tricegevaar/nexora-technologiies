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
      <section className="relative min-h-screen flex items-center overflow-hidden hero-mobile" style={{ padding: "160px 0 80px" }}>
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/photos/bg.jpg')" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(18, 40, 59, 0.8), rgba(31, 182, 255, 0.3))" }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-400/10 backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [20, -20, 20] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm"
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif", textAlign: "center" }}
              >
                Innovating <span className="gradient-text">Tomorrow's</span>
                <br />Digital Solutions
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-white text-center mx-auto"
                style={{ 
                  marginTop: "1.2rem",
                  fontSize: "1.1rem", 
                  lineHeight: "1.6",
                  padding: "0 20px",
                  textAlign: "center"
                }}
              >
                We are a passionate team of digital innovators, crafting cutting-edge solutions that transform businesses <br /> and  drive sustainable growth in the digital age.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-sm">Discover Our Story</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
          />
        </motion.div>
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
