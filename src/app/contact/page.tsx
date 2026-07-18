"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import "../globals.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Enquiry",
    message: ""
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/[\s\-\+]/g, ''))) {
      alert("Please enter a valid phone number.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const text = `Hi, I'm ${formData.name}.\n\n*Subject:* ${formData.subject}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Message:*\n${formData.message}`;
    const url = `https://wa.me/919371676783?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-header"
        >
          <h2>Contact <span className="gradient-text">Us</span></h2>
          <p>Get in touch with our specialists today</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "40px", marginTop: "40px" }}>
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="premium-card"
            style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "15px" }}>Reach Us</h3>
              <div style={{ display: "flex", gap: "15px", alignItems: "flex-start", marginBottom: "15px" }}>
                <MapPin className="text-accent" style={{ flexShrink: 0, marginTop: "4px" }} />
                <p style={{ color: "var(--color-text)", lineHeight: "1.6" }}>
                  Office, A Wing, Mahesh Galaxy Society, Sinhgad Rd, Meenakshipuram, Vadgaon Budruk, Pune, Maharashtra 411041
                </p>
              </div>
            </div>
            
            <div style={{ height: "1px", background: "rgba(0,0,0,0.05)" }}></div>

            <div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "15px" }}>Call Us</h3>
              <div style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "10px" }}>
                <Phone className="text-accent" />
                <p style={{ color: "var(--color-text)", fontWeight: "600" }}>+91 - 9371676783</p>
              </div>
            </div>

            <div style={{ height: "1px", background: "rgba(0,0,0,0.05)" }}></div>

            <div>
              <h3 style={{ fontSize: "1.5rem", color: "var(--color-primary)", marginBottom: "15px" }}>Email Us</h3>
              <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <Mail className="text-accent" style={{ flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "var(--color-text)", fontWeight: "600" }}>madhuramedical@gmail.com</p>
                  <p style={{ color: "var(--color-text)", fontWeight: "600" }}>madhuramedicalequipment.sleep@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="premium-card"
            style={{ padding: "40px" }}
          >
            <h3 style={{ fontSize: "1.8rem", marginBottom: "30px", color: "var(--color-primary)" }}>Send a Message</h3>
            <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontFamily: "inherit" }} />
                <input type="text" placeholder="Your Phone" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontFamily: "inherit" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontFamily: "inherit" }} />
                <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} style={{ padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontFamily: "inherit", background: "white" }}>
                  <option value="Enquiry">Enquiry</option>
                  <option value="Sales">Sales</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Suggestion">Suggestion</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", outline: "none", fontFamily: "inherit", resize: "vertical" }}></textarea>
              <button type="button" onClick={handleSubmit} className="gradient-border-btn" style={{ padding: "15px", alignSelf: "flex-start", marginTop: "10px" }}>Send via WhatsApp</button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
