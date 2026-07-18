"use client";

import { motion } from "framer-motion";
import "./ProductShowcase.css";

const products = [
  {
    id: 1,
    name: "AirSense™ 11 AutoSet",
    image: "CPAP Device",
    price: "$980",
    rating: "4.9",
    specs: ["Auto-adjusting", "Heated Humidifier", "Bluetooth"]
  },
  {
    id: 2,
    name: "DreamStation 2 Advanced",
    image: "DreamStation Device",
    price: "$850",
    rating: "4.8",
    specs: ["Color Touchscreen", "Ramp Plus", "Compact"]
  },
  {
    id: 3,
    name: "ResMed AirMini",
    image: "AirMini Device",
    price: "$1,050",
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
              className="premium-card product-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="product-image-container">
                <div className="device-mock product-mock"></div>
                <div className="product-rating">★ {product.rating}</div>
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="specs">
                  {product.specs.map(spec => <span key={spec} className="spec-badge">{spec}</span>)}
                </div>
                <div className="product-footer">
                  <span className="price numbers">{product.price}</span>
                  <button className="gradient-border-btn view-btn">View Details</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
