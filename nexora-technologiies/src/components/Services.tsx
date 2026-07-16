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

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" style={{ background: "var(--dark-bg)", padding: "100px 0" }}>
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "60px" }}
        >
          <h2 className="section-title">
            Our Services &amp; <span className="gradient-text-static">Investment Guide</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "16px" }}>
            We deliver strategic digital solutions designed to help businesses scale, streamline operations, and compete more effectively.
          </p>
          <p style={{ color: "rgba(183,195,208,0.45)", fontSize: "0.875rem", maxWidth: "700px", margin: "0 auto", lineHeight: 1.7 }}>
            Pricing below reflects typical starting investments. Final pricing depends on scope, complexity, integrations, and your specific requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px", marginBottom: "50px" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                background: "rgba(11,77,255,0.05)",
                border: "1px solid rgba(0,180,255,0.1)",
                borderRadius: "20px",
                padding: "32px 26px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
              whileHover={{ borderColor: "rgba(0,180,255,0.3)", y: -6, boxShadow: "0 20px 50px rgba(11,77,255,0.12)" }}
            >
              {/* Top accent line on hover */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #0B4DFF, #00B4FF)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} className="service-top-line" />

              {/* Icon */}
              <div style={{ marginBottom: "20px" }}>
                <div style={{ width: "52px", height: "52px", background: "rgba(0,180,255,0.1)", border: "1px solid rgba(0,180,255,0.2)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <service.icon size={22} style={{ color: "#00B4FF" }} />
                </div>
              </div>

              <h3 style={{ color: "white", fontWeight: 600, fontSize: "1rem", marginBottom: "10px" }}>
                {service.subtitle}
              </h3>

              <p style={{ color: "rgba(183,195,208,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: "20px" }}>
                {service.desc}
              </p>

              {/* Features */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{ color: "rgba(183,195,208,0.35)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
                  What&apos;s Included
                </p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <CheckCircle size={13} style={{ color: "#00B4FF", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "rgba(183,195,208,0.65)", fontSize: "0.82rem" }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div style={{ marginBottom: "20px" }}>
                <p style={{ color: "rgba(183,195,208,0.35)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                  Ideal For
                </p>
                <p style={{ color: "rgba(183,195,208,0.5)", fontSize: "0.8rem", lineHeight: 1.5 }}>{service.ideal}</p>
              </div>

              {/* Price + CTA */}
              <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(0,180,255,0.08)" }}>
                <p style={{ color: "rgba(183,195,208,0.35)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>
                  Starting Investment
                </p>
                <p style={{ color: "#00B4FF", fontWeight: 700, fontSize: "1rem", marginBottom: service.priceNote ? "4px" : "14px" }}>
                  {service.price}
                </p>
                {service.priceNote && (
                  <p style={{ color: "rgba(183,195,208,0.4)", fontSize: "0.75rem", marginBottom: "14px" }}>or {service.priceNote}</p>
                )}
                <Link
                  href="/contact"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    color: "#00B4FF", fontSize: "0.85rem", fontWeight: 600,
                    padding: "10px 16px", borderRadius: "8px",
                    border: "1px solid rgba(0,180,255,0.2)",
                    background: "rgba(0,180,255,0.05)",
                    textDecoration: "none", width: "100%", justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(0,180,255,0.12)"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.4)"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,180,255,0.05)"; e.currentTarget.style.borderColor = "rgba(0,180,255,0.2)"; e.currentTarget.style.color = "#00B4FF"; }}
                >
                  {service.cta}
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            background: "rgba(11,77,255,0.06)",
            border: "1px solid rgba(0,180,255,0.15)",
            borderRadius: "20px",
            padding: "36px 40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
            <div>
              <h4 style={{ color: "white", fontWeight: 600, fontSize: "1.05rem", marginBottom: "10px" }}>
                Important Pricing Note
              </h4>
              <p style={{ color: "rgba(183,195,208,0.6)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "14px" }}>
                All prices are starting investments and serve as a general guide. Final pricing varies based on:
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}>
                {["Project Scope", "Number of Features", "Design Requirements", "Integrations", "Timelines", "Technical Complexity"].map((item) => (
                  <span key={item} style={{ background: "rgba(0,180,255,0.07)", color: "rgba(183,195,208,0.65)", border: "1px solid rgba(0,180,255,0.12)", padding: "4px 12px", borderRadius: "50px", fontSize: "0.78rem" }}>
                    {item}
                  </span>
                ))}
              </div>
              <p style={{ color: "rgba(183,195,208,0.5)", fontSize: "0.875rem" }}>
                For an accurate quotation, book a consultation with our team.
              </p>
            </div>
            <Link href="/contact" className="btn-primary inline-flex group" style={{ whiteSpace: "nowrap", alignSelf: "flex-start" }}>
              Request a Custom Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
