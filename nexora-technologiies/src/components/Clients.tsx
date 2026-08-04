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
    <section style={{ background: "#0A0A0B", padding: "70px 0" }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <p style={{ color: "rgba(220,210,190,0.3)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Trusted by Innovative Companies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "12px", alignItems: "center" }}
          className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.04 * i, duration: 0.3 }}
              style={{
                background: "rgba(201,168,76,0.03)",
                border: "1px solid rgba(201,168,76,0.08)",
                borderRadius: "10px",
                padding: "12px",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              whileHover={{
                borderColor: "rgba(201,168,76,0.22)",
                background: "rgba(201,168,76,0.06)",
              }}
            >
              <img
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "48px",
                  objectFit: "contain",
                  opacity: 0.55,
                  filter: "grayscale(40%) brightness(1.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter = "grayscale(0%) brightness(1.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.55";
                  e.currentTarget.style.filter = "grayscale(40%) brightness(1.1)";
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
