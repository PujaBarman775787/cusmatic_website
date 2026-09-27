// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: rgba(136, 14, 79, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #FFFFFF;
          padding: 60px 24px 30px;
          margin-top: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          width: 100%;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-brand h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          margin-bottom: 12px;
          color: #FFD966;
        }

        .footer-brand p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          max-width: 300px;
          font-family: 'Montserrat', sans-serif;
        }

        .footer-social {
          display: flex;
          gap: 16px;
          margin-top: 16px;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          text-decoration: none;
          font-size: 18px;
          transition: all 0.3s;
        }

        .footer-social a:hover {
          background: #D81B60;
          transform: translateY(-3px);
        }

        .footer-column h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #FFD966;
          font-family: 'Montserrat', sans-serif;
        }

        .footer-column ul {
          list-style: none;
          padding: 0;
        }

        .footer-column ul li {
          margin-bottom: 10px;
        }

        .footer-column ul a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          transition: color 0.3s;
        }

        .footer-column ul a:hover {
          color: #FFD966;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Montserrat', sans-serif;
        }

        .footer-bottom-links {
          display: flex;
          gap: 24px;
        }

        .footer-bottom-links a {
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-bottom-links a:hover {
          color: #FFD966;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer-brand p {
            max-width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 12px;
            text-align: center;
          }

          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h3>💄 COSMETICS</h3>
            <p>
              Redefining your everyday beauty routine with premium skincare
              and makeup products crafted for the modern icon.
            </p>
            <div className="footer-social">
              <a href="/#">📘</a>
              <a href="/#">📸</a>
              <a href="/#">🐦</a>
              <a href="/#">▶️</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/products?category=lips">Lips</Link></li>
              <li><Link to="/products?category=face">Face</Link></li>
              <li><Link to="/products?category=eyes">Eyes</Link></li>
              <li><Link to="/products?category=skincare">Skincare</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/#">Help Center</a></li>
              <li><a href="/#">Returns & Exchanges</a></li>
              <li><a href="/#">Shipping Policy</a></li>
              <li><a href="/#">Track Order</a></li>
              <li><a href="/#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="/#">Our Story</a></li>
              <li><a href="/#">Sustainability</a></li>
              <li><a href="/#">Careers</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Press</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Cosmetics. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="/#">Privacy Policy</a>
            <a href="/#">Terms of Service</a>
            <a href="/#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;