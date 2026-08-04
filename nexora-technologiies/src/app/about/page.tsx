"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Rocket, Users, Award, Target, Lightbulb, ShieldCheck, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: 50, label: "Projects Delivered", suffix: "+" },
  { value: 30, label: "Happy Clients", suffix: "+" },
  { value: 99, label: "Uptime Achieved", suffix: ".9%" },
  { value: 4, label: "Years of Excellence", suffix: "+" },
];

const values = [
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead of technology trends to deliver future-proof, enterprise-grade solutions." },
  { icon: ShieldCheck, title: "Secure by Design", desc: "Security is built into every layer of our architecture from the ground up." },
  { icon: TrendingUp, title: "Results-Driven", desc: "Every solution we build is engineered to deliver measurable, meaningful business outcomes." },
  { icon: Globe, title: "Global Mindset", desc: "Pretoria-based but globally minded — we build solutions for a connected world." },
  { icon: Users, title: "People First", desc: "We work collaboratively with clients, treating their goals as our own." },
  { icon: Target, title: "Precision Execution", desc: "From scoping to delivery, we maintain clarity, quality, and accountability throughout." },
];

const team = [
  { name: "Leadership Team", role: "Strategy & Vision", desc: "Our executive team brings decades of combined experience in enterprise technology and business transformation." },
  { name: "Engineering Team", role: "Development & Architecture", desc: "Full-stack engineers, solution architects, and DevOps specialists building high-performance digital systems." },
  { name: "Design Team", role: "UI/UX & Brand", desc: "User-centred designers crafting intuitive, accessible, and visually compelling digital experiences." },
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

export default function AboutPage() {
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-80px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 90px",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          background: "#0A0A0B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 9, repeat: Infinity }}
            style={{ position: "absolute", top: "5%", left: "5%", width: "50%", height: "65%", background: "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <motion.div
            animate={{ opacity: [0.08, 0.18, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            style={{ position: "absolute", bottom: "5%", right: "5%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.015) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="container relative z-10">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)", padding: "5px 14px", borderRadius: "50px", marginBottom: "28px" }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 6px #C9A84C", display: "inline-block" }} />
                <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>About Nexora Technologies</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.1, marginBottom: "22px", letterSpacing: "-0.03em", fontFamily: "'Inter', sans-serif" }}
              >
                Innovating{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Tomorrow&apos;s
                </span>
                <br />Digital Solutions, Today
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
                style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(220,210,190,0.6)", maxWidth: "580px", margin: "0 auto" }}
              >
                We are a team of passionate innovators, engineers, and problem solvers delivering high-performance digital solutions that help businesses thrive in a connected world.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#111114", borderTop: "1px solid rgba(201,168,76,0.08)", borderBottom: "1px solid rgba(201,168,76,0.08)", padding: "36px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0" }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ textAlign: "center", borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.08)" : "none", padding: "0 20px" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#C9A84C", lineHeight: 1, marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ color: "rgba(220,210,190,0.4)", fontSize: "0.8rem", fontWeight: 500 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ background: "#0A0A0B", padding: "100px 0" }} ref={storyRef}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "5px 14px", borderRadius: "50px", marginBottom: "22px" }}>
                <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Story</span>
              </div>

              <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.15, marginBottom: "20px", letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
                Driving Digital{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Innovation
                </span>
              </h2>

              <p style={{ color: "rgba(220,210,190,0.6)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "18px" }}>
                Founded in 2022, Nexora Technologies has been at the forefront of digital transformation — helping businesses leverage technology for sustainable growth. Based in Pretoria, we serve clients across South Africa and beyond.
              </p>
              <p style={{ color: "rgba(220,210,190,0.6)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "32px" }}>
                Our team combines deep technical expertise with business acumen to deliver solutions that don&apos;t just work — they create lasting competitive advantage for the organisations we serve.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: Rocket, text: "Innovation First — Future-proof technology solutions" },
                  { icon: Users, text: "Collaborative — Your success is our north star" },
                  { icon: Award, text: "Quality — Excellence in every line of code" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "9px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={15} style={{ color: "#C9A84C" }} />
                    </div>
                    <span style={{ color: "rgba(220,210,190,0.65)", fontSize: "0.875rem" }}>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ position: "relative" }}
            >
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", height: "420px" }}>
                <Image src="/photos/portBg.jpg" alt="Nexora Team" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.08) 60%)" }} />
                <div style={{ position: "absolute", inset: 0, borderRadius: "16px", border: "1px solid rgba(201,168,76,0.14)" }} />
              </div>
              {/* Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", bottom: "24px", left: "24px",
                  background: "rgba(13,13,16,0.92)", border: "1px solid rgba(201,168,76,0.25)",
                  borderRadius: "10px", padding: "12px 16px",
                  backdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: "10px",
                }}
              >
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "14px" }}>📍</span>
                </div>
                <div>
                  <p style={{ color: "#F4F0E8", fontSize: "0.8rem", fontWeight: 600, margin: 0 }}>Proudly based in</p>
                  <p style={{ color: "#C9A84C", fontSize: "0.75rem", fontWeight: 500, margin: 0 }}>Pretoria, South Africa</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ background: "#111114", padding: "100px 0" }} ref={valuesRef}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "56px" }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", padding: "5px 14px", borderRadius: "50px", marginBottom: "20px" }}>
              <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Our Values</span>
            </div>
            <h2 style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.15, letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
              The Principles That{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Guide Us
              </span>
            </h2>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 18 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                style={{
                  background: "#16161A",
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  transition: "all 0.3s ease",
                }}
                whileHover={{ borderColor: "rgba(201,168,76,0.28)", y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.35)" }}
              >
                <div style={{ width: "44px", height: "44px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "11px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <value.icon size={18} style={{ color: "#C9A84C" }} />
                </div>
                <h4 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", fontFamily: "'Inter', sans-serif" }}>{value.title}</h4>
                <p style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.82rem", lineHeight: 1.65 }}>{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#0A0A0B", padding: "80px 0", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.2, marginBottom: "14px", letterSpacing: "-0.02em", fontFamily: "'Inter', sans-serif" }}>
              Ready to Work with{" "}
              <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Our Team?
              </span>
            </h2>
            <p style={{ color: "rgba(220,210,190,0.5)", fontSize: "0.9rem", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
              Let&apos;s discuss your project and explore how we can help drive your business forward.
            </p>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                padding: "14px 30px", borderRadius: "8px",
                background: "#C9A84C", color: "#0A0A0B",
                fontWeight: 700, fontSize: "0.9rem", textDecoration: "none",
                border: "1px solid #C9A84C", transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F0C060"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(201,168,76,0.35)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A84C"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
