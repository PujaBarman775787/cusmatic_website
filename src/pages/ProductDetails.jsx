import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';

// Import images
import l1 from '../assets/products/l1.png';
import m1 from '../assets/products/m1.png';
import m2 from '../assets/products/m2.png';
import f1 from '../assets/products/f1.png';
import e1 from '../assets/products/e1.png';

const productsData = {
  '1': {
    id: '1',
    name: 'Velvet Matte Lipstick',
    price: '45.00',
    image: l1,
    rating: 4.8,
    description: 'Long-lasting matte liquid lipstick with a hydrating, weightless formula. Infused with Vitamin E and Rose Extract for a smooth, comfortable wear.',
    ingredients: 'Infused with Hyaluronic Acid, Vitamin E, and Rose Extract to ensure long-lasting hydration and a natural, dewy finish.',
    howToUse: 'Apply directly using the applicator or your fingertips. Blend outwards for a seamless, radiant glow.',
    category: 'lips'
  },
  '2': {
    id: '2',
    name: 'Radiance Serum',
    price: '89.00',
    image: m2,
    rating: 4.9,
    description: 'A brightening vitamin C serum that leaves your skin glowing and plump. Perfect for all skin types.',
    ingredients: 'Vitamin C, Hyaluronic Acid, Ferulic Acid, and Vitamin E.',
    howToUse: 'Apply 2-3 drops to clean skin every morning and evening.',
    category: 'skincare'
  },
  '3': {
    id: '3',
    name: 'Flawless Foundation',
    price: '55.00',
    image: f1,
    rating: 4.5,
    description: 'Medium-to-full coverage foundation with a natural, skin-like luminous finish. Buildable and long-wearing.',
    ingredients: 'Hyaluronic Acid, Squalane, and Vitamin E.',
    howToUse: 'Apply with a brush, sponge, or fingertips. Build coverage as desired.',
    category: 'face'
  },
  '4': {
    id: '4',
    name: 'Rose Gold Palette',
    price: '65.00',
    oldPrice: '85.00',
    image: e1,
    rating: 4.7,
    description: '18 highly pigmented eyeshadows ranging from flattering mattes to striking shimmers. Versatile for day to night looks.',
    ingredients: 'Mica, Iron Oxides, Titanium Dioxide, and Dimethicone.',
    howToUse: 'Apply with eyeshadow brushes or fingertips for intense pigmentation.',
    category: 'eyes'
  },
  '5': {
    id: '5',
    name: 'Luxury Perfume',
    price: '120.00',
    oldPrice: '150.00',
    image: m1,
    rating: 4.8,
    description: 'A seductive blend of dark berry, jasmine, and rich vanilla musk. Long-lasting and captivating.',
    ingredients: 'Bergamot, Jasmine, Vanilla, Musk, and Cedarwood.',
    howToUse: 'Spray on pulse points: wrists, neck, and behind ears.',
    category: 'fragrance'
  },
  '6': {
    id: '6',
    name: 'Silk Primer',
    price: '35.00',
    image: e1,
    rating: 4.6,
    description: 'Pore-blurring primer that locks in your makeup for up to 16 hours. Creates a smooth, velvety canvas.',
    ingredients: 'Dimethicone, Hyaluronic Acid, and Vitamin E.',
    howToUse: 'Apply a small amount to clean, moisturized skin before foundation.',
    category: 'face'
  }
};

const similarProducts = [
  { id: 's1', title: 'Radiance Serum', price: '89.00', image: m2 },
  { id: 's2', title: 'Flawless Foundation', price: '55.00', image: f1 },
  { id: 's3', title: 'Luxury Perfume', price: '120.00', image: m1 },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsData[id] || productsData['1'];
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('Description');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const price = parseFloat(product.price) || 0;

  const increaseQty = () => setQty(qty + 1);
  const decreaseQty = () => qty > 1 && setQty(qty - 1);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: qty }, qty);
    setNotification('Added to cart!');
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <>
      <style>{`
        .pd-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .pd-breadcrumb {
          font-size: 14px;
          color: #F48FB1;
          margin-bottom: 24px;
          font-family: 'Montserrat', sans-serif;
        }

        .pd-breadcrumb a {
          color: #880E4F;
          text-decoration: none;
        }

        .pd-breadcrumb a:hover {
          color: #D81B60;
        }

        .pd-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          background: #FFFFFF;
          border-radius: 24px;
          padding: 40px;
          border: 1px solid #F8BBD0;
        }

        .pd-image-section {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #FFF0F5;
          border-radius: 20px;
          padding: 40px;
          min-height: 400px;
        }

        .pd-image-section img {
          width: 100%;
          max-width: 400px;
          height: auto;
          object-fit: contain;
        }

        .pd-info { display: flex; flex-direction: column; gap: 16px; }

        .pd-category {
          font-size: 14px;
          color: #D81B60;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .pd-name {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: #880E4F;
        }

        .pd-rating {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #D81B60;
        }

        .pd-reviews {
          color: #F48FB1;
          text-decoration: underline;
          cursor: pointer;
        }

        .pd-price {
          font-size: 32px;
          font-weight: 700;
          color: #D81B60;
        }

        .pd-old-price {
          text-decoration: line-through;
          color: #F48FB1;
          font-size: 22px;
          margin-left: 12px;
          font-weight: 400;
        }

        .pd-description-text {
          font-size: 15px;
          color: #880E4F;
          line-height: 1.6;
          font-family: 'Montserrat', sans-serif;
        }

        .pd-tabs {
          display: flex;
          gap: 8px;
          background: #FFF0F5;
          border-radius: 16px;
          padding: 4px;
          border: 1px solid #FCE4EC;
        }

        .pd-tab {
          flex: 1;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: transparent;
          font-size: 14px;
          font-weight: 600;
          color: #F48FB1;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Montserrat', sans-serif;
        }

        .pd-tab.active {
          background: #FFFFFF;
          color: #D81B60;
          box-shadow: 0 2px 10px rgba(136, 14, 79, 0.08);
        }

        .pd-tab-content {
          font-size: 14px;
          color: #880E4F;
          line-height: 1.6;
          font-family: 'Montserrat', sans-serif;
          padding: 8px 0;
        }

        .pd-qty-selector {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 8px 0;
        }

        .pd-qty-selector label {
          font-weight: 600;
          color: #880E4F;
        }

        .pd-qty-controls {
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid #F8BBD0;
          border-radius: 20px;
          padding: 4px;
          background: #FFFFFF;
        }

        .pd-qty-controls button {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 50%;
          background: #FFF0F5;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D81B60;
        }

        .pd-qty-controls span {
          font-size: 18px;
          font-weight: 700;
          color: #D81B60;
          padding: 0 12px;
          min-width: 30px;
          text-align: center;
        }

        .pd-actions {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .pd-actions .btn-add {
          flex: 1;
          padding: 16px;
          border: none;
          border-radius: 30px;
          background: #D81B60;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 20px rgba(216, 27, 96, 0.3);
          transition: all 0.3s;
        }

        .pd-actions .btn-add:hover {
          background: #880E4F;
          transform: translateY(-2px);
        }

        .pd-actions .btn-fav {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid #F8BBD0;
          background: transparent;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pd-actions .btn-fav.active {
          background: #FCE4EC;
          border-color: #D81B60;
        }

        .pd-actions .btn-fav:hover {
          border-color: #D81B60;
        }

        .pd-similar {
          margin-top: 48px;
        }

        .pd-similar h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: #880E4F;
          margin-bottom: 24px;
        }

        .pd-similar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .pd-similar-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 16px;
          border: 1px solid #F8BBD0;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .pd-similar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.1);
        }

        .pd-similar-card img {
          width: 100%;
          height: 120px;
          object-fit: contain;
          background: #FFF0F5;
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 12px;
        }

        .pd-similar-card .name {
          font-size: 14px;
          color: #880E4F;
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
        }

        .pd-similar-card .price {
          font-size: 16px;
          font-weight: 700;
          color: #D81B60;
          margin-top: 4px;
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

        @media (max-width: 992px) {
          .pd-main {
            grid-template-columns: 1fr;
            padding: 24px;
          }
          .pd-similar-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .pd-container {
            padding: 20px 16px;
          }
          .pd-main {
            padding: 20px;
          }
          .pd-name {
            font-size: 26px;
          }
          .pd-price {
            font-size: 26px;
          }
          .pd-similar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .pd-actions {
            flex-direction: column;
          }
          .pd-actions .btn-fav {
            width: 100%;
            height: 48px;
            border-radius: 30px;
          }
        }

        @media (max-width: 480px) {
          .pd-image-section {
            min-height: 250px;
            padding: 20px;
          }
          .pd-similar-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .pd-tabs {
            flex-wrap: wrap;
          }
          .pd-tab {
            flex: 1;
            min-width: 60px;
            font-size: 12px;
            padding: 8px;
          }
        }
      `}</style>

      <div className="pd-container">
        {notification && (
          <div className="notification-toast">
            <span className="notif-icon">✓</span>
            <div>
              <div className="notif-title">{notification}</div>
            </div>
          </div>
        )}

        <div className="pd-breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Products</Link> / {product.name}
        </div>

        <div className="pd-main">
          <div className="pd-image-section">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="pd-info">
            <div className="pd-category">{product.category || 'Beauty'}</div>
            <h1 className="pd-name">{product.name}</h1>

            <div className="pd-rating">
              <span>⭐ {product.rating}</span>
              <span className="pd-reviews">128 Reviews</span>
            </div>

            <div>
              <span className="pd-price">${price.toFixed(2)}</span>
              {product.oldPrice && (
                <span className="pd-old-price">${product.oldPrice}</span>
              )}
            </div>

            <div className="pd-description-text">{product.description}</div>

            <div className="pd-tabs">
              {['Description', 'Ingredients', 'How to Use'].map((tab) => (
                <button
                  key={tab}
                  className={`pd-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="pd-tab-content">
              {activeTab === 'Description' && product.description}
              {activeTab === 'Ingredients' && (product.ingredients || 'Coming soon...')}
              {activeTab === 'How to Use' && (product.howToUse || 'Coming soon...')}
            </div>

            <div className="pd-qty-selector">
              <label>Quantity:</label>
              <div className="pd-qty-controls">
                <button onClick={decreaseQty}>−</button>
                <span>{qty}</span>
                <button onClick={increaseQty}>+</button>
              </div>
            </div>

            <div className="pd-actions">
              <button className="btn-add" onClick={handleAddToCart}>
                🛍️ Add to Bag
              </button>
              <button
                className={`btn-fav ${isFavorite(product.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(product)}
              >
                {isFavorite(product.id) ? '❤️' : '♡'}
              </button>
            </div>
          </div>
        </div>

        <div className="pd-similar">
          <h3>You May Also Like</h3>
          <div className="pd-similar-grid">
            {similarProducts.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id} className="pd-similar-card">
                <img src={item.image} alt={item.title} />
                <div className="name">{item.title}</div>
                <div className="price">${parseFloat(item.price).toFixed(2)}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;