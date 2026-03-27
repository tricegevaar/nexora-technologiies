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
    <section id="services" className="section-dark" style={{ padding: "100px 0" }}>
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "20px" }}
        >
          <h2 className="section-title">
            Our Services & <span className="gradient-text-static">Investment Guide</span>
          </h2>
          <p className="section-subtitle" style={{ marginBottom: "16px" }}>
            We deliver strategic digital solutions designed to help businesses scale, streamline operations, and compete more effectively in a fast-moving digital world.
          </p>
          <p className="text-white/50 text-sm" style={{ maxWidth: "700px", margin: "0 auto 60px", lineHeight: "1.7" }}>
            The pricing below reflects typical starting investments for our most requested services. Final pricing depends on scope, complexity, integrations, timelines, and your specific business requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: "30px", marginBottom: "60px" }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="service-card glass-card rounded-2xl group flex flex-col"
              style={{ padding: "36px 28px" }}
            >
              {/* Icon */}
              <div className="flex justify-center" style={{ marginBottom: "20px" }}>
                <div className="icon-box group-hover:scale-105 transition-transform duration-300">
                  <service.icon size={22} className="text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors text-center" style={{ marginBottom: "12px" }}>
                {service.subtitle}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed text-center" style={{ marginBottom: "20px" }}>
                {service.desc}
              </p>

              {/* Features */}
              <div style={{ marginBottom: "20px" }}>
                <p className="text-white/30 text-xs uppercase tracking-wider" style={{ marginBottom: "12px" }}>What&apos;s Included</p>
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/60 text-sm">
                      <CheckCircle size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="service-ideal" style={{ marginBottom: "20px" }}>
                <p className="text-white/30 text-xs uppercase tracking-wider" style={{ marginBottom: "8px" }}>Ideal For</p>
                <p className="text-white/50 text-xs leading-relaxed">{service.ideal}</p>
              </div>

              {/* Price */}
              <div className="service-price-block" style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-white/30 text-xs uppercase tracking-wider" style={{ marginBottom: "6px" }}>Starting Investment</p>
                <p className="text-cyan-400 font-semibold text-base" style={{ marginBottom: service.priceNote ? "4px" : "16px" }}>{service.price}</p>
                {service.priceNote && (
                  <p className="text-white/40 text-xs" style={{ marginBottom: "16px" }}>or {service.priceNote}</p>
                )}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn service-cta-btn"
                >
                  {service.cta}
                  <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
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
          className="service-disclaimer"
        >
          <div className="service-disclaimer-inner">
            <div style={{ marginBottom: "16px" }}>
              <h4 className="text-white font-semibold" style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
                Important Pricing Note
              </h4>
              <p className="text-white/60 text-sm leading-relaxed" style={{ marginBottom: "12px" }}>
                All listed prices are starting investments and are intended as a general guide. Final pricing may vary depending on:
              </p>
              <div className="disclaimer-tags">
                {["Project Scope", "Number of Features", "Design Requirements", "Integrations", "Timelines", "Technical Complexity"].map((item) => (
                  <span key={item} className="disclaimer-tag">{item}</span>
                ))}
              </div>
              <p className="text-white/50 text-sm" style={{ marginTop: "14px" }}>
                For a detailed and accurate quotation, we recommend booking a consultation with our team.
              </p>
            </div>
            <Link href="/contact" className="btn-primary inline-flex group">
              Request a Custom Quote
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
