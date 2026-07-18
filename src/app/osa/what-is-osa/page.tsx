"use client";
import { motion } from "framer-motion";

export default function GenericPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-header">
          <h2>What is OSA?</h2>
          <p>Understanding Obstructive Sleep Apnea.</p>
        </motion.div>
        <div style={{ marginTop: "40px", padding: "40px", background: "white", borderRadius: "16px", minHeight: "300px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(0,0,0,0.05)" }}>
          <p style={{ color: "var(--color-muted)", fontSize: "1.2rem" }}>Content coming soon...</p>
        </div>
      </div>
    </main>
  );
}