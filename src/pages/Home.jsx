// src/pages/Home.jsx - Clean Video Background with Space Below Navbar
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BannerCarousel from '../components/BannerCarousel';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

// Import video
import videoBg from '../assets/images/video.mp4';

// Import images
import l1 from '../assets/products/l1.png';
import m1 from '../assets/products/m1.png';
import m2 from '../assets/products/m2.png';
import f1 from '../assets/products/f1.png';
import e1 from '../assets/products/e1.png';
import b1Room from '../assets/rooms/b1.jpg';
import c1Room from '../assets/rooms/c1.jpg';
import officeRoom from '../assets/rooms/office.png';

// Import categories
import l1Cat from '../assets/categories/l1.png';
import m2Cat from '../assets/categories/m2.png';
import e2Cat from '../assets/categories/e2.png';
import f1Cat from '../assets/categories/f1.png';
import sofaCat from '../assets/categories/sofa.png';
import tableCat from '../assets/categories/table1.png';

// Import background image (fallback)
import bgImage from '../assets/images/home/categories/ca2.jpg';

const categories = [
  { id: '1', title: 'Lips', image: l1Cat },
  { id: '2', title: 'Face', image: m2Cat },
  { id: '3', title: 'Eyes', image: e2Cat },
  { id: '4', title: 'Skincare', image: f1Cat },
  { id: '5', title: 'Fragrance', image: sofaCat },
  { id: '6', title: 'Tools', image: tableCat },
];

const products = [
  {
    id: '1',
    name: 'Velvet Matte Lipstick',
    price: '45.00',
    image: l1,
    rating: 4.8,
    description: 'Long-lasting matte liquid lipstick with a hydrating, weightless formula.',
  },
  {
    id: '2',
    name: 'Radiance Serum',
    price: '89.00',
    image: m2,
    rating: 4.9,
    description: 'A brightening vitamin C serum that leaves your skin glowing and plump.',
  },
  {
    id: '3',
    name: 'Flawless Foundation',
    price: '55.00',
    image: f1,
    rating: 4.5,
    description: 'Medium-to-full coverage foundation with a natural, skin-like luminous finish.',
  },
  {
    id: '4',
    name: 'Rose Gold Palette',
    price: '65.00',
    oldPrice: '85.00',
    image: e1,
    rating: 4.7,
    description: '18 highly pigmented eyeshadows ranging from flattering mattes to striking shimmers.',
  },
  {
    id: '5',
    name: 'Luxury Perfume',
    price: '120.00',
    oldPrice: '150.00',
    image: m1,
    rating: 4.8,
    description: 'A seductive blend of dark berry, jasmine, and rich vanilla musk.',
  },
  {
    id: '6',
    name: 'Silk Primer',
    price: '35.00',
    image: e1,
    rating: 4.6,
    description: 'Pore-blurring primer that locks in your makeup for up to 16 hours.',
  },
];

const newArrivals = [
  {
    id: 'n1',
    name: 'Overnight Mask',
    price: '42.00',
    image: l1,
    rating: 4.9,
    description: 'Intensely hydrating sleep mask infused with hyaluronic acid and rose water.',
  },
  {
    id: 'n2',
    name: 'Luxury Perfume',
    price: '120.00',
    oldPrice: '150.00',
    image: m1,
    rating: 4.8,
    description: 'A seductive blend of dark berry, jasmine, and rich vanilla musk.',
  },
  {
    id: 'n3',
    name: 'Blush Stick',
    price: '28.00',
    image: f1,
    rating: 4.7,
    description: 'Creamy, buildable blush stick for a natural, dewy flush of color.',
  },
  {
    id: 'n4',
    name: 'Silk Primer',
    price: '35.00',
    image: e1,
    rating: 4.6,
    description: 'Pore-blurring primer that locks in your makeup for up to 16 hours.',
  },
];

const Home = () => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart, updateQuantity, getQuantity } = useCart();
  const [notification, setNotification] = useState(null);

  const showNotification = (productName) => {
    setNotification(productName);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <>
      <style>{`
        .home-page {
          min-height: 100vh;
          background-image: url(${bgImage});
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        .home-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 240, 245, 0.65),
            rgba(252, 228, 236, 0.75)
          );
          pointer-events: none;
          z-index: 0;
        }

        .home-content {
          position: relative;
          z-index: 1;
          margin: 0 auto;
          padding: 50px 70px 70px;
        }

        /* HERO SECTION - Video Background Only */
        .home-hero {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          margin-bottom: 40px;
          margin-top: 0;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
        }

        /* Video Background - Full visible */
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        /* Text Content - On top of video */
        .hero-content {
          position: relative;
          z-index: 1;
          padding: 60px 40px 50px;
          text-align: center;
          max-width: 800px;
          width: 90%;
          margin: 20px;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: 52px;
          color: rgb(232, 221, 225);
          margin-bottom: 12px;
          line-height: 1.2;
          text-shadow: 0 2px 30px rgba(0, 0, 0, 0.4);
          letter-spacing: 1px;
        }

        .hero-content h1 span {
          color: #d81b60;
          display: inline-block;
        }

        .hero-content p {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.95);
          max-width: 600px;
          margin: 0 auto 28px;
          font-family: 'Montserrat', sans-serif;
          line-height: 1.8;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .btn-shop {
          display: inline-block;
          padding: 16px 48px;
          background: #FFFFFF;
          color: #D81B60;
          border: none;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .btn-shop:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
          background: #FFD966;
        }

        .section {
          margin-bottom: 48px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 30px;
          color: #880E4F;
          text-shadow: 0 1px 8px rgba(255, 255, 255, 0.5);
        }

        .see-all {
          color: #D81B60;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          transition: color 0.3s;
          text-shadow: 0 1px 8px rgba(255, 255, 255, 0.3);
        }

        .see-all:hover { color: #880E4F; }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .category-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(248, 187, 208, 0.4);
          transition: all 0.3s;
          text-decoration: none;
          box-shadow: 0 2px 8px rgba(136, 14, 79, 0.06);
        }

        .category-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 25px rgba(136, 14, 79, 0.12);
          background: rgba(255, 255, 255, 0.95);
        }

        .category-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #FFF0F5;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-icon img { width: 32px; height: 32px; object-fit: contain; }
        .category-name { font-size: 16px; color: #880E4F; font-weight: 500; font-family: 'Montserrat', sans-serif; }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .product-card {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 16px;
          border: 1px solid rgba(248, 187, 208, 0.4);
          transition: all 0.3s;
          position: relative;
          box-shadow: 0 2px 8px rgba(136, 14, 79, 0.06);
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.12);
          background: rgba(255, 255, 255, 0.95);
        }

        .product-image-wrap {
          height: 200px;
          background: #FFF0F5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 12px;
        }

        .product-image { width: 80%; height: 80%; object-fit: contain; }
        .product-link { text-decoration: none; display: block; }

        .sale-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #880E4F;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          font-family: 'Montserrat', sans-serif;
        }

        .heart-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: #FFFFFF;
          font-size: 18px;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
        }

        .heart-btn.active { background: #FCE4EC; }

        .product-info { padding: 4px 4px 8px; }

        .rating-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #D81B60;
          margin-bottom: 4px;
        }

        .product-name {
          font-size: 15px;
          color: #880E4F;
          font-weight: 500;
          margin-bottom: 4px;
          font-family: 'Montserrat', sans-serif;
        }

        .product-price {
          font-size: 18px;
          font-weight: 700;
          color: #D81B60;
        }

        .old-price {
          text-decoration: line-through;
          color: #F48FB1;
          font-size: 13px;
        }

        .quick-add {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: none;
          background: #D81B60;
          color: #FFFFFF;
          font-size: 20px;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(216, 27, 96, 0.3);
          transition: transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quick-add:hover { transform: scale(1.1); }

        .inline-counter {
          position: absolute;
          bottom: 16px;
          right: 16px;
          display: flex;
          align-items: center;
          background: #FFFFFF;
          border: 1.5px solid #D81B60;
          border-radius: 10px;
          overflow: hidden;
        }

        .inline-counter button {
          width: 30px;
          height: 30px;
          border: none;
          background: transparent;
          color: #880E4F;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .inline-counter span {
          padding: 0 8px;
          font-weight: 700;
          color: #D81B60;
          font-size: 14px;
          min-width: 20px;
          text-align: center;
        }

        .btn-primary {
          display: inline-block;
          padding: 12px 32px;
          background: #D81B60;
          color: #FFFFFF;
          border: none;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 15px rgba(216, 27, 96, 0.3);
          transition: all 0.3s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 25px rgba(216, 27, 96, 0.4);
        }

        .sale-banner {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 16px 0 40px;
          border: 1px solid rgba(248, 187, 208, 0.4);
          box-shadow: 0 4px 20px rgba(136, 14, 79, 0.08);
        }

        .sale-banner h3 {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          color: #D81B60;
        }

        .sale-banner p {
          color: #880E4F;
          font-size: 16px;
          margin-top: 4px;
        }

        .sale-banner img {
          width: 120px;
          height: 120px;
          object-fit: contain;
        }

        .new-arrivals-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 40px;
        }

        .new-arrival-card {
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 16px;
          border: 1px solid rgba(248, 187, 208, 0.4);
          text-decoration: none;
          transition: all 0.3s;
          box-shadow: 0 2px 8px rgba(136, 14, 79, 0.06);
        }

        .new-arrival-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.12);
          background: rgba(255, 255, 255, 0.95);
        }

        .new-arrival-card img {
          width: 100%;
          height: 120px;
          object-fit: contain;
          margin-bottom: 12px;
        }

        .new-arrival-card .product-name { font-size: 14px; }
        .new-arrival-card .product-price { font-size: 16px; }

        .collection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 20px;
        }

        .collection-card {
          position: relative;
          height: 250px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.15);
          transition: transform 0.3s;
        }

        .collection-card:hover { transform: scale(1.02); }

        .collection-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .collection-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(136, 14, 79, 0.3);
        }

        .collection-content {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          background: rgba(255, 240, 245, 0.15);
          backdrop-filter: blur(4px);
          border-radius: 12px;
          padding: 12px 16px;
          border: 1px solid rgba(255, 184, 208, 0.3);
        }

        .collection-content h4 {
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 700;
          font-family: 'Playfair Display', serif;
        }

        .collection-content span {
          color: #FCE4EC;
          font-size: 13px;
        }

        .notification-toast {
          position: fixed;
          top: 90px;
          left: 50%;
          transform: translateX(-50%);
          background: #FFFFFF;
          border-radius: 16px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.15);
          z-index: 1000;
          animation: slideDown 0.4s ease-out;
          border: 1px solid #F8BBD0;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .notif-icon { font-size: 24px; color: #D81B60; }
        .notif-title { font-weight: 700; color: #880E4F; font-size: 16px; }
        .notif-desc { font-size: 13px; color: #D81B60; }

        @media (max-width: 992px) {
          .product-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .new-arrivals-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .hero-content h1 {
            font-size: 40px;
          }
          .hero-content {
            padding: 40px 24px 40px;
          }
          .home-hero {
            min-height: 350px;
          }
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 32px;
          }
          .hero-content {
            padding: 30px 20px 30px;
          }
          .home-hero {
            min-height: 300px;
          }
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .new-arrivals-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .collection-grid {
            grid-template-columns: 1fr;
          }
          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .sale-banner {
            flex-direction: column;
            text-align: center;
            padding: 30px 20px;
          }
          .sale-banner img {
            margin-top: 16px;
          }
          .section-title {
            font-size: 24px;
          }
          .hero-content p {
            font-size: 15px;
          }
          .btn-shop {
            padding: 14px 32px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .hero-content h1 {
            font-size: 28px;
          }
          .hero-content {
            padding: 25px 16px 25px;
          }
          .home-hero {
            min-height: 250px;
            border-radius: 20px;
          }
          .product-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .new-arrivals-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .product-image-wrap {
            height: 150px;
          }
          .sale-banner h3 {
            font-size: 28px;
          }
          .sale-banner img {
            width: 80px;
            height: 80px;
          }
          .collection-card {
            height: 180px;
          }
        }
      `}</style>

      <div className="home-page">
        <div className="home-content">
          {/* Hero Section - Video Background Only */}
          <section className="home-hero">
            {/* Video Background - Full visible */}
            <video 
              className="hero-video" 
              src={videoBg} 
              autoPlay 
              loop 
              muted 
              playsInline
              poster={bgImage}
            />
            
            {/* Text Content - On top of video */}
            <div className="hero-content">
              <h1>
                Discover Your Perfect<br />
                <span>Everyday Glow</span>
              </h1>
              <p>
                Explore our premium collection of skincare and makeup products
                designed to enhance your natural beauty.
              </p>
              <Link to="/products" className="btn-shop">Shop Now →</Link>
            </div>
          </section>

          {notification && (
            <div className="notification-toast">
              <span className="notif-icon">✓</span>
              <div>
                <div className="notif-title">Added to Bag!</div>
                <div className="notif-desc">{notification} added successfully.</div>
              </div>
            </div>
          )}

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Categories</h2>
              <Link to="/products" className="see-all">See all →</Link>
            </div>
            <div className="category-grid">
              {categories.map((cat) => (
                <Link to={`/products?category=${cat.title.toLowerCase()}`} key={cat.id} className="category-item">
                  <div className="category-icon">
                    <img src={cat.image} alt={cat.title} />
                  </div>
                  <span className="category-name">{cat.title}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="section">
            <BannerCarousel />
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Trending Beauty</h2>
              <Link to="/products" className="see-all">See all →</Link>
            </div>
            <div className="product-grid">
              {products.map((item) => {
                const qty = getQuantity(item.id);
                return (
                  <div key={item.id} className="product-card">
                    <Link to={`/product/${item.id}`} className="product-link">
                      <div className="product-image-wrap">
                        <img src={item.image} alt={item.name} className="product-image" />
                        {item.oldPrice && (
                          <span className="sale-badge">SALE</span>
                        )}
                        <button
                          className={`heart-btn ${isFavorite(item.id) ? 'active' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            toggleFavorite(item);
                          }}
                        >
                          {isFavorite(item.id) ? '❤️' : '♡'}
                        </button>
                      </div>
                      <div className="product-info">
                        <div className="rating-row">
                          <span>⭐ {item.rating}</span>
                          {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                        </div>
                        <div className="product-name">{item.name}</div>
                        <div className="product-price">${item.price}</div>
                      </div>
                    </Link>
                    {qty > 0 ? (
                      <div className="inline-counter">
                        <button onClick={() => updateQuantity(item.id, qty - 1)}>−</button>
                        <span>{qty}</span>
                        <button onClick={() => { updateQuantity(item.id, qty + 1); showNotification(item.name); }}>+</button>
                      </div>
                    ) : (
                      <button
                        className="quick-add"
                        onClick={() => { addToCart(item, 1); showNotification(item.name); }}
                      >
                        +
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          <div className="sale-banner">
            <div>
              <h3>Flash Sale</h3>
              <p>All Lipsticks up to 40% off</p>
              <Link to="/products" className="btn-primary" style={{ marginTop: '12px', display: 'inline-block' }}>
                Shop Now
              </Link>
            </div>
            <img src={m1} alt="Flash Sale" />
          </div>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Just Arrived</h2>
              <Link to="/products" className="see-all">See all →</Link>
            </div>
            <div className="new-arrivals-grid">
              {newArrivals.map((item) => (
                <Link to={`/product/${item.id}`} key={item.id} className="new-arrival-card">
                  <img src={item.image} alt={item.name} />
                  <div className="rating-row">
                    <span>⭐ {item.rating}</span>
                    {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
                  </div>
                  <div className="product-name">{item.name}</div>
                  <div className="product-price">${item.price}</div>
                </Link>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-header">
              <h2 className="section-title">Shop by Collection</h2>
            </div>
            <div className="collection-grid">
              <div className="collection-card">
                <img src={b1Room} alt="Summer Glow" />
                <div className="collection-overlay" />
                <div className="collection-content">
                  <h4>Summer Glow</h4>
                  <span>124 Items</span>
                </div>
              </div>
              <div className="collection-card">
                <img src={c1Room} alt="Bridal Edit" />
                <div className="collection-overlay" />
                <div className="collection-content">
                  <h4>Bridal Edit</h4>
                  <span>86 Items</span>
                </div>
              </div>
              <div className="collection-card">
                <img src={officeRoom} alt="Everyday Basics" />
                <div className="collection-overlay" />
                <div className="collection-content">
                  <h4>Everyday Basics</h4>
                  <span>52 Items</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;