"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Code, Globe, GraduationCap, Hash, Headphones, Network, ArrowRight, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Software Development",
    subtitle: "Custom Software Development",
    desc: "Purpose-built software solutions engineered to solve real business challenges, improve efficiency, and support long-term growth.",
    features: ["Custom Business Applications", "API Development & Integrations", "Database Architecture & Design", "Internal Systems & Dashboards", "Workflow Automation", "Third-Party System Integration"],
    ideal: "Businesses that need custom platforms, internal management systems, portals, dashboards, or process automation solutions.",
    price: "From R85,000",
    cta: "Request a Proposal",
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "Web Development",
    desc: "Modern, responsive, and high-performance websites built to strengthen your online presence and convert visitors into customers.",
    features: ["Corporate Websites", "E-commerce Platforms", "CMS Development", "Landing Pages", "SEO Optimization", "Progressive Web Apps (PWAs)"],
    ideal: "Startups, SMEs, and established brands looking for a professional, conversion-focused online presence.",
    price: "From R15,000",
    cta: "Get a Website Quote",
  },
  {
    icon: GraduationCap,
    title: "IT Training",
    subtitle: "IT Training & Skills Development",
    desc: "Practical, industry-relevant training designed to upskill teams, professionals, and learners with in-demand digital and technical competencies.",
    features: ["Technical Workshops", "Certification Preparation", "Corporate Training Sessions", "Custom Training Curricula", "Skills Development Programs", "Ongoing Learning Support"],
    ideal: "Companies, educational institutions, teams, and organizations looking to improve technical capacity and workforce readiness.",
    price: "From R25,000 per programme",
    cta: "Book a Training Consultation",
  },
  {
    icon: Hash,
    title: "Social Media Management",
    subtitle: "Social Media Management",
    desc: "Strategic social media solutions that help brands build visibility, engage audiences, and drive measurable business growth.",
    features: ["Content Strategy & Planning", "Community Management", "Performance Analytics & Reporting", "Campaign Support", "Paid Advertising Coordination", "Brand Positioning Guidance"],
    ideal: "Businesses looking to build a stronger digital presence, improve engagement, and maintain consistent brand communication.",
    price: "From R15,000 / month",
    cta: "Discuss Your Social Strategy",
  },
  {
    icon: Headphones,
    title: "IT Consulting",
    subtitle: "IT Consulting",
    desc: "Expert advisory services to help your business make smarter technology decisions, improve infrastructure, and plan for sustainable digital growth.",
    features: ["Technology Audits", "Strategic IT Planning", "Digital Transformation Advisory", "Infrastructure Recommendations", "Security Assessments", "Systems & Process Evaluation"],
    ideal: "Businesses seeking technical direction, system planning, infrastructure guidance, or digital transformation support.",
    price: "From R1,200 / hour",
    priceNote: "Fixed-fee project consulting available",
    cta: "Book a Consultation",
  },
  {
    icon: Network,
    title: "Network Solutions",
    subtitle: "Network Solutions",
    desc: "Reliable, secure, and scalable network infrastructure solutions designed to keep your business connected, protected, and operating efficiently.",
    features: ["Network Design & Deployment", "Security Implementation", "Performance Optimization", "Connectivity Planning", "Infrastructure Upgrades", "Monitoring & Support Solutions"],
    ideal: "Organizations requiring secure office networking, branch connectivity, infrastructure upgrades, or optimized network performance.",
    price: "From R65,000",
    cta: "Request a Network Assessment",
  },
];

export default function ServicesPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "160px 0 90px",
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          background: "#0A0A0B",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 9, repeat: Infinity }}
            style={{ position: "absolute", top: "5%", right: "5%", width: "50%", height: "65%", background: "radial-gradient(ellipse, rgba(201,168,76,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <motion.div
            animate={{ opacity: [0.08, 0.16, 0.08] }}
            transition={{ duration: 12, repeat: Infinity, delay: 2 }}
            style={{ position: "absolute", bottom: "5%", left: "5%", width: "45%", height: "55%", background: "radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(201,168,76,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.015) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        </div>

        <div className="container relative z-10">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.22)", padding: "5px 14px", borderRadius: "50px", marginBottom: "28px" }}
              >
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#C9A84C", boxShadow: "0 0 6px #C9A84C", display: "inline-block" }} />
                <span style={{ color: "#C9A84C", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Solutions &amp; Investment Guide</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 800, color: "#F4F0E8", lineHeight: 1.1, marginBottom: "22px", letterSpacing: "-0.03em", fontFamily: "'Inter', sans-serif" }}
              >
                Our Services &amp;{" "}
                <span style={{ background: "linear-gradient(135deg, #C9A84C, #F0C060)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Investment Guide
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.7 }}
                style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(220,210,190,0.6)", maxWidth: "560px", margin: "0 auto 12px" }}
              >
                We deliver strategic digital solutions designed to help businesses scale, streamline operations, and compete more effectively.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.7 }}
                style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(220,210,190,0.4)", maxWidth: "520px", margin: "0 auto" }}
              >
                Pricing reflects typical starting investments. Final pricing depends on scope, complexity, integrations, and your specific requirements.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ background: "#111114", padding: "100px 0" }} ref={gridRef}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "48px" }}>
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                style={{
                  background: "#16161A",
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: "16px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.35s ease",
                }}
                whileHover={{ borderColor: "rgba(201,168,76,0.3)", y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.4)" }}
              >
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #A07830, #C9A84C, #F0C060)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }}
                  className="service-top-line"
                />

                <div style={{ marginBottom: "18px" }}>
                  <div style={{ width: "48px", height: "48px", background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.18)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <service.icon size={20} style={{ color: "#C9A84C" }} />
                  </div>
                </div>

                <h3 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "0.95rem", marginBottom: "10px", fontFamily: "'Inter', sans-serif" }}>
                  {service.subtitle}
                </h3>
                <p style={{ color: "rgba(220,210,190,0.55)", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: "20px" }}>
                  {service.desc}
                </p>

                <div style={{ marginBottom: "18px" }}>
                  <p style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>What&apos;s Included</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {service.features.map((f) => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                        <CheckCircle size={12} style={{ color: "#C9A84C", flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ color: "rgba(220,210,190,0.55)", fontSize: "0.8rem" }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: "18px" }}>
                  <p style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>Ideal For</p>
                  <p style={{ color: "rgba(220,210,190,0.45)", fontSize: "0.78rem", lineHeight: 1.55 }}>{service.ideal}</p>
                </div>

                <div style={{ marginTop: "auto", paddingTop: "18px", borderTop: "1px solid rgba(201,168,76,0.08)" }}>
                  <p style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Starting Investment</p>
                  <p style={{ color: "#C9A84C", fontWeight: 700, fontSize: "0.95rem", marginBottom: service.priceNote ? "4px" : "14px" }}>{service.price}</p>
                  {service.priceNote && (
                    <p style={{ color: "rgba(220,210,190,0.35)", fontSize: "0.74rem", marginBottom: "14px" }}>or {service.priceNote}</p>
                  )}
                  <Link href="/contact" className="service-cta-btn">
                    {service.cta} <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="service-disclaimer"
          >
            <div className="service-disclaimer-inner">
              <div>
                <h4 style={{ color: "#F4F0E8", fontWeight: 600, fontSize: "1rem", marginBottom: "10px" }}>Important Pricing Note</h4>
                <p style={{ color: "rgba(220,210,190,0.55)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "12px" }}>
                  All listed prices are starting investments and are intended as a general guide. Final pricing may vary depending on:
                </p>
                <div className="disclaimer-tags">
                  {["Project Scope", "Number of Features", "Design Requirements", "Integrations", "Timelines", "Technical Complexity"].map((item) => (
                    <span key={item} className="disclaimer-tag">{item}</span>
                  ))}
                </div>
                <p style={{ color: "rgba(220,210,190,0.4)", fontSize: "0.85rem", marginTop: "14px" }}>
                  For a detailed and accurate quotation, book a consultation with our team.
                </p>
              </div>
              <Link href="/contact" className="btn-primary" style={{ whiteSpace: "nowrap", alignSelf: "flex-start" }}>
                Request a Custom Quote <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
