const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'src', 'app');

const genericPages = [
  { path: 'resources', title: 'Resources', desc: 'Educational materials and helpful guides.' },
  { path: 'products/cpap-machines', title: 'CPAP Machines', desc: 'Continuous Positive Airway Pressure devices.' },
  { path: 'products/bipap-machines', title: 'BiPAP Machines', desc: 'Bilevel Positive Airway Pressure devices.' },
  { path: 'products/oxygen-concentrators', title: 'Oxygen Concentrators', desc: 'Medical grade oxygen supply devices.' },
  { path: 'products/masks', title: 'Masks & Accessories', desc: 'Comfortable interfaces for your therapy.' },
  { path: 'brands/lowenstein', title: 'Löwenstein Medical', desc: 'Premium German engineering for sleep therapy.' },
  { path: 'brands/pharma-system', title: 'Pharma System', desc: 'Reliable healthcare solutions.' },
  { path: 'brands/armstrong', title: 'Armstrong', desc: 'Innovative medical devices.' },
  { path: 'osa/what-is-osa', title: 'What is OSA?', desc: 'Understanding Obstructive Sleep Apnea.' },
  { path: 'osa/symptoms', title: 'Signs & Symptoms', desc: 'Learn how to identify sleep apnea.' },
  { path: 'osa/diagnosis', title: 'Diagnosis', desc: 'How we diagnose your sleep disorder.' },
  { path: 'osa/treatment', title: 'Treatment Options', desc: 'Explore the available therapies.' },
  { path: 'offerings/diagnosis', title: 'Diagnosis Services', desc: 'Professional sleep studies and analysis.' },
  { path: 'offerings/consultation', title: 'Consultation', desc: 'Speak with our sleep experts.' },
  { path: 'offerings/advice', title: 'Advice & Resources', desc: 'Ongoing support for your therapy.' }
];

const genericTemplate = (title, desc) => `"use client";
import { motion } from "framer-motion";

export default function GenericPage() {
  return (
    <main className="page-container" style={{ paddingTop: "120px", paddingBottom: "60px", minHeight: "100vh", backgroundColor: "var(--color-background)" }}>
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="section-header">
          <h2>${title}</h2>
          <p>${desc}</p>
        </motion.div>
        <div style={{ marginTop: "40px", padding: "40px", background: "white", borderRadius: "16px", minHeight: "300px", display: "flex", alignItems: "center", justify: "center", border: "1px solid rgba(0,0,0,0.05)" }}>
          <p style={{ color: "var(--color-muted)", fontSize: "1.2rem" }}>Content coming soon...</p>
        </div>
      </div>
    </main>
  );
}`;

genericPages.forEach(page => {
  const dir = path.join(baseDir, page.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), genericTemplate(page.title, page.desc));
});

console.log('Created generic pages.');
