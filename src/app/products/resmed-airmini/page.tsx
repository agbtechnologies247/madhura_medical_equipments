"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Truck } from "lucide-react";
import "../../globals.css";

const product = {
  name: "ResMed AirMini",
  image: "/airmini_real.webp",
  rating: "4.7",
  specs: ["Travel Friendly", "Waterless Humidification", "App Control"],
  description: "The ResMed AirMini is the world's smallest CPAP machine. It features the same proven algorithms as the AirSense 10 machines, wrapped in a compact, travel-friendly package.",
  features: [
    "Smallest portable CPAP on the market",
    "Waterless humidification system (HumidX)",
    "AirMini app for easy setup and monitoring",
    "Compatible with popular ResMed masks",
    "AutoRamp with sleep onset detection"
  ]
};

export default function AirMiniPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "50px", alignItems: "start" }}>
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="premium-card" style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", maxWidth: "500px", borderRadius: "12px", objectFit: "cover" }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <span style={{ background: "rgba(0,180,216,0.1)", color: "var(--color-primary)", padding: "5px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "700" }}>Medical Grade</span>
                <span style={{ color: "var(--color-accent)", fontWeight: "600" }}>★ {product.rating}</span>
              </div>
              <h1 style={{ fontSize: "2.5rem", marginBottom: "15px", color: "var(--color-primary)" }}>{product.name}</h1>
              <p style={{ fontSize: "1.1rem", color: "var(--color-muted)", lineHeight: "1.6" }}>{product.description}</p>
            </div>

            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "10px 0" }}>
              {product.specs.map(spec => (
                <span key={spec} style={{ background: "white", padding: "8px 15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)", fontSize: "0.9rem", color: "var(--color-primary)", fontWeight: "600" }}>{spec}</span>
              ))}
            </div>

            <div style={{ marginTop: "20px" }}>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "15px", color: "var(--color-primary)" }}>Key Features:</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {product.features.map((feature, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", color: "var(--color-text)" }}>
                    <CheckCircle size={18} className="text-accent" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", gap: "20px", marginTop: "30px", padding: "20px", background: "white", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.05)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-text)", fontWeight: "600" }}><ShieldCheck className="text-secondary" /> 2 Year Warranty</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--color-text)", fontWeight: "600" }}><Truck className="text-secondary" /> Free Delivery</div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <a href={`https://wa.me/919371676783?text=${encodeURIComponent(`Hi, I want to Enquire about ${product.name}`)}`} target="_blank" rel="noopener noreferrer" className="glow-btn" style={{ display: "inline-block", background: "var(--color-primary)", color: "white", padding: "15px 30px", borderRadius: "8px", fontWeight: "700", textDecoration: "none", fontSize: "1.1rem", width: "100%", textAlign: "center" }}>
                Inquire on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}
