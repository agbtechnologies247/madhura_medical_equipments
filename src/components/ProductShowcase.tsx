"use client";

import { motion } from "framer-motion";
import "./ProductShowcase.css";

const products = [
  {
    id: "airsense-11",
    name: "AirSense™ 11 AutoSet",
    image: "/airsense_real.jpeg",
    rating: "4.9",
    specs: ["Auto-adjusting", "Heated Humidifier", "Bluetooth"]
  },
  {
    id: "dreamstation-2",
    name: "DreamStation 2 Advanced",
    image: "/dreamstation_real.jpeg",
    rating: "4.8",
    specs: ["Color Touchscreen", "Ramp Plus", "Compact"]
  },
  {
    id: "resmed-airmini",
    name: "ResMed AirMini",
    image: "/airmini_real.webp",
    rating: "4.7",
    specs: ["Travel Friendly", "Waterless Humidification", "App Control"]
  }
];

export default function ProductShowcase() {
  return (
    <section className="product-showcase">
      <div className="section-container">
        <div className="section-header">
          <h2>Premium <span className="gradient-text">Products</span></h2>
          <p>Explore our curated selection of top-tier sleep therapy devices.</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={`/products/${product.id}`} className="premium-card product-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px 16px 0 0' }} />
                  <div className="product-rating">★ {product.rating}</div>
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="specs">
                    {product.specs.map(spec => <span key={spec} className="spec-badge">{spec}</span>)}
                  </div>
                  <div className="product-footer">
                    <button className="gradient-border-btn view-btn">View Details</button>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
