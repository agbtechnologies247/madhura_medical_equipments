"use client";

import { motion } from "framer-motion";
import { FileText, Newspaper, Film, Headphones, Lightbulb, Link as LinkIcon } from "lucide-react";
import "../globals.css";

export default function ResourcesPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-header" style={{ marginBottom: "50px" }}>
          <h2>Knowledge <span className="gradient-text">Library</span></h2>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.1rem" }}>
            You will find some useful resources here including links, research papers, articles, videos, audios, helpful tips and advices to support your journey towards better sleep.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ background: "rgba(0,180,216,0.05)", border: "1px dashed rgba(0,180,216,0.3)", borderRadius: "24px", padding: "40px", marginBottom: "60px" }}>
          <h2 style={{ color: "var(--color-primary)", marginBottom: "20px", fontSize: "1.8rem" }}>Understanding Obstructive Sleep Apnea (OSA)</h2>
          <p style={{ color: "var(--color-text)", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
            OSA is a silent disease that leads to multiple events in the human physiology. It is a serious sleep disorder in which breathing stops and starts intermittently during the night.
          </p>
          <p style={{ color: "var(--color-text)", fontSize: "1.1rem", lineHeight: "1.8" }}>
            Learn more about OSA and its complications in this section. The better you understand OSA, the better you can control it and the risks associated with it, such as hypertension, heart disease, and daytime fatigue.
          </p>
        </motion.div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "2rem", color: "var(--color-primary)" }}>Explore Our Resources</h2>
          <p style={{ color: "var(--color-muted)", fontSize: "1.1rem" }}>Curated materials to help you make informed decisions about your sleep therapy.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <FileText size={40} className="text-accent" />
            <h3 style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}>Research Papers</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: "1.6" }}>Scientific studies and clinical research on the effectiveness of CPAP therapy and OSA management.</p>
            <a href="#" className="text-accent" style={{ marginTop: "auto", fontWeight: "700", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>Browse Library &rarr;</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="premium-card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <Newspaper size={40} className="text-accent" />
            <h3 style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}>Expert Articles</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: "1.6" }}>Detailed articles written by sleep specialists covering common challenges and therapy breakthroughs.</p>
            <a href="#" className="text-accent" style={{ marginTop: "auto", fontWeight: "700", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>Read More &rarr;</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="premium-card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <Film size={40} className="text-accent" />
            <h3 style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}>Educational Videos</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: "1.6" }}>Watch step-by-step guides on equipment maintenance, mask fitting, and understanding sleep reports.</p>
            <a href="#" className="text-accent" style={{ marginTop: "auto", fontWeight: "700", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>Watch Now &rarr;</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="premium-card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <Headphones size={40} className="text-accent" />
            <h3 style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}>Audio Guides</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: "1.6" }}>Listen to patient testimonials and relaxation techniques for better therapy compliance.</p>
            <a href="#" className="text-accent" style={{ marginTop: "auto", fontWeight: "700", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>Listen Here &rarr;</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="premium-card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <Lightbulb size={40} className="text-accent" />
            <h3 style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}>Helpful Tips & Advice</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: "1.6" }}>Practical advice on traveling with CPAP, cleaning your mask, and improving sleep hygiene.</p>
            <a href="#" className="text-accent" style={{ marginTop: "auto", fontWeight: "700", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>Get Advice &rarr;</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="premium-card" style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "15px" }}>
            <LinkIcon size={40} className="text-accent" />
            <h3 style={{ color: "var(--color-primary)", fontSize: "1.4rem" }}>Useful Links</h3>
            <p style={{ color: "var(--color-muted)", lineHeight: "1.6" }}>Links to international sleep foundations and authorized equipment technical support pages.</p>
            <a href="#" className="text-accent" style={{ marginTop: "auto", fontWeight: "700", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>External Links &rarr;</a>
          </motion.div>

        </div>

      </div>
    </main>
  );
}