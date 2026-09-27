// src/components/Navbar.jsx - Balanced Logo & Auth Position with Cart Icon
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import shoppingBagIcon from '../assets/images/auth/shopping-bag.png'; // Adjust path as needed

const Navbar = () => {
  const location = useLocation();
  const { totalItemsCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(216, 27, 96, 0.08);
          padding: 0 70px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 2px 20px rgba(136, 14, 79, 0.06);
        }

        .navbar-left {
          display: flex;
          align-items: center;
          flex: 1;
        }

        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #880E4F;
          text-decoration: none;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .navbar-center {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          gap: 12px;
        }

        .navbar-cart {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 240, 245, 0.6);
          border: 1px solid rgba(248, 187, 208, 0.3);
          text-decoration: none;
          transition: all 0.3s;
        }

        .navbar-cart:hover {
          background: #FCE4EC;
          transform: scale(1.05);
        }

        .navbar-cart img {
          width: 22px;
          height: 22px;
          object-fit: contain;
        }

        .navbar-cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #D81B60;
          color: #FFFFFF;
          font-size: 10px;
          font-weight: 700;
          min-width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          border: 2px solid #FFF0F5;
        }

        .navbar-auth {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .navbar-auth .btn-login {
          padding: 8px 20px;
          border: 2px solid #D81B60;
          border-radius: 24px;
          background: transparent;
          color: #D81B60;
          font-weight: 600;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          white-space: nowrap;
        }

        .navbar-auth .btn-login:hover {
          background: #D81B60;
          color: #FFFFFF;
        }

        .navbar-auth .btn-signup {
          padding: 8px 20px;
          border: none;
          border-radius: 24px;
          background: #D81B60;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          white-space: nowrap;
        }

        .navbar-auth .btn-signup:hover {
          background: #880E4F;
          transform: scale(1.05);
        }

        .navbar-mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #880E4F;
          padding: 8px;
        }

        .navbar-mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          padding: 20px 24px;
          border-bottom: 1px solid rgba(216, 27, 96, 0.1);
          flex-direction: column;
          gap: 16px;
          z-index: 999;
          animation: slideDown 0.3s ease-out;
        }

        .navbar-mobile-menu.open {
          display: flex;
        }

        .navbar-mobile-menu a {
          text-decoration: none;
          color: #880E4F;
          font-size: 16px;
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
          padding: 8px 0;
          border-bottom: 1px solid rgba(216, 27, 96, 0.05);
        }

        .navbar-mobile-menu a.active {
          color: #D81B60;
        }

        .navbar-mobile-menu .mobile-auth {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .navbar-mobile-menu .mobile-auth a {
          flex: 1;
          text-align: center;
          padding: 12px;
          border-radius: 24px;
          border: none;
          font-weight: 600;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          text-decoration: none;
        }

        .navbar-mobile-menu .mobile-auth .mobile-login {
          border: 2px solid #D81B60;
          background: transparent;
          color: #D81B60;
        }

        .navbar-mobile-menu .mobile-auth .mobile-signup {
          background: #D81B60;
          color: #FFFFFF;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 16px;
            height: 64px;
          }

          .navbar-logo {
            font-size: 22px;
          }

          .navbar-left {
            flex: none;
          }

          .navbar-center {
            display: none;
          }

          .navbar-right {
            flex: none;
            gap: 8px;
          }

          .navbar-cart {
            width: 36px;
            height: 36px;
          }

          .navbar-cart img {
            width: 18px;
            height: 18px;
          }

          .navbar-auth {
            display: none;
          }

          .navbar-mobile-toggle {
            display: block;
          }

          .navbar-mobile-menu {
            display: none;
          }

          .navbar-mobile-menu.open {
            display: flex;
          }
        }

        @media (min-width: 769px) {
          .navbar-mobile-toggle {
            display: none;
          }
        }
      `}</style>

      <nav className="navbar">
        {/* LEFT - Logo */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <span>💄</span> COSMETICS
          </Link>
        </div>

        {/* CENTER - Empty (for balanced spacing) */}
        <div className="navbar-center"></div>

        {/* RIGHT - Cart & Auth */}
        <div className="navbar-right">
          <Link to="/cart" className="navbar-cart">
            <img 
              src={shoppingBagIcon} 
              alt="Shopping Bag" 
            />
            {totalItemsCount > 0 && (
              <span className="navbar-cart-badge">{totalItemsCount}</span>
            )}
          </Link>

          <div className="navbar-auth">
            <Link to="/login" className="btn-login">Sign In</Link>
            <Link to="/signup" className="btn-signup">Sign Up</Link>
          </div>

          <button
            className="navbar-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </Link>
        <Link to="/products" className={isActive('/products') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
          Products
        </Link>
        <Link to="/favourites" className={isActive('/favourites') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
          Favourites
        </Link>
        <Link to="/notifications" className={isActive('/notifications') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
          Alerts
        </Link>
        <Link to="/profile" className={isActive('/profile') ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
          Profile
        </Link>
        <div className="mobile-auth">
          <Link to="/login" className="mobile-login" onClick={() => setIsMobileMenuOpen(false)}>
            Sign In
          </Link>
          <Link to="/signup" className="mobile-signup" onClick={() => setIsMobileMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;