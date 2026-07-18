"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Truck } from "lucide-react";
import "../../globals.css";

const products = [
  {
    id: "lumis-100",
    name: "Lumis 100 VPAP S",
    image: "/lumis-100.webp",
    rating: "4.8",
    specs: ["VPAP S", "TiControl", "Vsync"],
    description: "The Lumis 100 VPAP S is a noninvasive ventilator designed for spontaneously breathing, non-dependent patients with respiratory insufficiency.",
    features: ["Individually responsive with IntelligentAir", "Vsync continuous leak management", "TiControl for respiratory conditions", "ClimateControl auto humidification"]
  },
  {
    id: "medical-ventilator",
    name: "Advanced Medical Ventilator",
    image: "/medical-ventilator.webp",
    rating: "4.9",
    specs: ["Advanced Therapy", "High Precision", "ICU Grade"],
    description: "High-performance medical ventilator providing reliable and continuous respiratory support for critical care.",
    features: ["Precise volume and pressure delivery", "Advanced monitoring parameters", "Intuitive user interface", "Battery backup for safe transport"]
  }
];

export default function BiPAPPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-header" style={{ marginBottom: "50px" }}>
          <h2>BiPAP <span className="gradient-text">Machines</span></h2>
          <p>Explore our premium range of Bilevel Positive Airway Pressure devices and ventilators.</p>
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