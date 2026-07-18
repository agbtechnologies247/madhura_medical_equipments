"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import "../globals.css";

export default function CentersPage() {
  const centers = [
    {
      id: 1,
      city: "Vadgaon Budruk (Main Office)",
      address: "Office, A Wing, Mahesh Galaxy Society, Sinhgad Rd, Meenakshipuram, Vadgaon Budruk, Pune, Maharashtra 411041",
      phone: "+91 - 9371676783"
    },
    {
      id: 2,
      city: "Somwar Peth Branch",
      address: "Shree Vyankateshwara, 1st floor opposite Kamla nehru hospital, Somwar Peth, Pune - 411011",
      phone: "+91 - 9766872221"
    },
    {
      id: 3,
      city: "Vadgaon Budruk (B Wing)",
      address: "7th Floor, Flat - 702, B wing, Mahesh Galaxy Society, Sinhgad Rd, Meenakshipuram, Vadgaon Budruk, Pune, Maharashtra 411041",
      phone: "+91 - 9767196713"
    }
  ];

  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>Our <span className="gradient-text">Centers</span></h2>
          <p>Find a sleep therapy center near you</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "40px" }}>
          {centers.map((center, index) => (
            <motion.div 
              key={center.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="premium-card"
              style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ paddingBottom: "20px", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: "1.4rem", color: "var(--color-primary)", fontWeight: "700" }}>{center.city}</h3>
              </div>
              
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={20} className="text-accent" style={{ flexShrink: 0, marginTop: "2px" }} />
                <p style={{ color: "var(--color-text)", fontSize: "0.95rem", lineHeight: "1.5" }}>
                  {center.address}
                </p>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <Phone size={20} className="text-accent" />
                <p style={{ color: "var(--color-text)", fontSize: "1rem", fontWeight: "600" }}>
                  {center.phone}
                </p>
              </div>

              <div style={{ marginTop: "auto", paddingTop: "20px" }}>
                <button className="gradient-border-btn" style={{ width: "100%", padding: "12px" }}>Get Directions</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
