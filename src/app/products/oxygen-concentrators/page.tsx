"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import "../../globals.css";

const products = [
  {
    id: "oxygen-concentrator",
    name: "Medical Oxygen Concentrator",
    image: "/oxygen-concentrator.jpeg",
    rating: "4.8",
    specs: ["5L Capacity", "High Purity", "Low Noise"],
    description: "Reliable and robust oxygen concentrator providing high purity medical grade oxygen for home therapy.",
    features: ["Continuous flow delivery", "High oxygen concentration purity", "User-friendly interface and alarms", "Quiet operation for undisturbed sleep"]
  }
];

export default function OxygenConcentratorsPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-header" style={{ marginBottom: "50px" }}>
          <h2>Oxygen <span className="gradient-text">Concentrators</span></h2>
          <p>Explore our premium range of highly efficient oxygen therapy devices.</p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {products.map((product, index) => (
            <div key={product.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "start", background: "white", padding: "40px", borderRadius: "16px", border: "1px solid rgba(0,0,0,0.05)" }}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", maxWidth: "400px", borderRadius: "12px", objectFit: "cover" }} />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <h3 style={{ fontSize: "2rem", marginBottom: "15px", color: "var(--color-primary)" }}>{product.name}</h3>
                  <p style={{ fontSize: "1.1rem", color: "var(--color-muted)", lineHeight: "1.6" }}>{product.description}</p>
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "10px 0" }}>
                  {product.specs.map(spec => (
                    <span key={spec} style={{ background: "rgba(0,180,216,0.1)", padding: "8px 15px", borderRadius: "8px", fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: "600" }}>{spec}</span>
                  ))}
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "10px", color: "var(--color-primary)" }}>Key Features:</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {product.features.map((feature, i) => (
                      <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--color-text)" }}>
                        <CheckCircle size={16} className="text-accent" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <a href={`https://wa.me/919371676783?text=${encodeURIComponent(`Hi, I want to Enquire about ${product.name}`)}`} target="_blank" rel="noopener noreferrer" className="glow-btn" style={{ display: "inline-block", background: "var(--color-primary)", color: "white", padding: "12px 25px", borderRadius: "8px", fontWeight: "700", textDecoration: "none" }}>
                    Inquire on WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}