"use client";

import { motion } from "framer-motion";
import "../globals.css";

export default function AboutPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>About <span className="gradient-text">Us</span></h2>
          <p>Everything you need to know about our approach to your sleep health</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "40px" }}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="premium-card"
            style={{ padding: "40px" }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>Our Profile</h3>
            <p style={{ color: "var(--color-text)", lineHeight: "1.6", marginBottom: "15px" }}>
              Founded by Nitin Pardhi, Madhura Medical Equipments is the organization which provides you trust for Level 2 & Level 3 Sleep test devices at Home & Hospital. We have all types of the testing machine for the problem during sleep — CPAP, BiPAP, Sleep Apnea Test, and Oxygen Concentrator.
            </p>
            <p style={{ color: "var(--color-text)", lineHeight: "1.6", marginBottom: "15px" }}>
              We supply all over Maharashtra & Major Cities.
            </p>
            <p style={{ color: "var(--color-text)", lineHeight: "1.6", fontWeight: "600" }}>
              We are dedicated to improving your quality of life through advanced sleep care and respiratory solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="premium-card"
            style={{ padding: "40px" }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "20px", color: "var(--color-primary)" }}>Why Choose Us?</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {[
                "Treatment by Certified Sleep Specialists",
                "Specialty Center for Sleep Disorders",
                "Doctors trust us for treating their Sleep problems",
                "Complete treatment process under one roof",
                "Latest treatment modalities available",
                "No Hospitalization required for Diagnosis",
                "Home consultations available"
              ].map((item, i) => (
                <li key={i} style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "10px", color: "var(--color-text)" }}>
                  <span style={{ color: "var(--color-accent)", fontSize: "1.2rem" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
