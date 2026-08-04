"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const clients = [
  { name: "GrowthLab", logo: "/photos/1.png" },
  { name: "JNK Designs", logo: "/photos/2.png" },
  { name: "Infinite", logo: "/photos/3.png" },
  { name: "TSTC", logo: "/photos/4.png" },
  { name: "AB4IR", logo: "/photos/5.png" },
  { name: "Snape", logo: "/photos/6.png" },
  { name: "Mabogwane Metal", logo: "/photos/7.png" },
  { name: "Propciti", logo: "/photos/8.png" },
  { name: "Anequine", logo: "/photos/9.png" },
  { name: "Alphadot X", logo: "/photos/10.png" },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--dark-bg)", padding: "80px 0" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: "50px" }}
        >
          <p
            style={{
              color: "rgba(183,195,208,0.5)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Trusted by Innovative Companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10"
          style={{ gap: "16px", alignItems: "center" }}
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.05 * i, duration: 0.3 }}
              style={{
                background: "rgba(11,77,255,0.04)",
                border: "1px solid rgba(0,180,255,0.08)",
                borderRadius: "12px",
                padding: "12px",
                height: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              whileHover={{
                borderColor: "rgba(0,180,255,0.25)",
                background: "rgba(11,77,255,0.08)",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "55px",
                  objectFit: "contain",
                  opacity: 0.7,
                  filter: "grayscale(30%)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter = "grayscale(0%)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                  e.currentTarget.style.filter = "grayscale(30%)";
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
