import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

// Import images
import l1 from '../assets/products/l1.png';
import m1 from '../assets/products/m1.png';
import m2 from '../assets/products/m2.png';
import f1 from '../assets/products/f1.png';
import e1 from '../assets/products/e1.png';

const allProducts = [
  {
    id: '1',
    name: 'Velvet Matte Lipstick',
    price: '45.00',
    image: l1,
    rating: 4.8,
    category: 'lips',
    description: 'Long-lasting matte liquid lipstick with a hydrating, weightless formula.',
  },
  {
    id: '2',
    name: 'Radiance Serum',
    price: '89.00',
    image: m2,
    rating: 4.9,
    category: 'skincare',
    description: 'A brightening vitamin C serum that leaves your skin glowing and plump.',
  },
  {
    id: '3',
    name: 'Flawless Foundation',
    price: '55.00',
    image: f1,
    rating: 4.5,
    category: 'face',
    description: 'Medium-to-full coverage foundation with a natural, skin-like luminous finish.',
  },
  {
    id: '4',
    name: 'Rose Gold Palette',
    price: '65.00',
    oldPrice: '85.00',
    image: e1,
    rating: 4.7,
    category: 'eyes',
    description: '18 highly pigmented eyeshadows ranging from flattering mattes to striking shimmers.',
  },
  {
    id: '5',
    name: 'Luxury Perfume',
    price: '120.00',
    oldPrice: '150.00',
    image: m1,
    rating: 4.8,
    category: 'fragrance',
    description: 'A seductive blend of dark berry, jasmine, and rich vanilla musk.',
  },
  {
    id: '6',
    name: 'Silk Primer',
    price: '35.00',
    image: e1,
    rating: 4.6,
    category: 'face',
    description: 'Pore-blurring primer that locks in your makeup for up to 16 hours.',
  },
  {
    id: '7',
    name: 'Blush Stick',
    price: '28.00',
    image: f1,
    rating: 4.7,
    category: 'face',
    description: 'Creamy, buildable blush stick for a natural, dewy flush of color.',
  },
  {
    id: '8',
    name: 'Overnight Mask',
    price: '42.00',
    image: l1,
    rating: 4.9,
    category: 'skincare',
    description: 'Intensely hydrating sleep mask infused with hyaluronic acid and rose water.',
  },
];

const categories = ['all', 'lips', 'face', 'eyes', 'skincare', 'fragrance'];

const Products = () => {
  const [searchParams] = useSearchParams();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredProducts = allProducts.filter((product) => {
    const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const showNotification = (productName) => {
    setNotification(productName);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <>
      <style>{`
        .products-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .products-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .products-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          color: #880E4F;
        }

        .products-header p {
          color: #D81B60;
          font-size: 16px;
          margin-top: 8px;
        }

        .products-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .category-filters {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .category-filters button {
          padding: 8px 20px;
          border: 2px solid #F8BBD0;
          border-radius: 20px;
          background: transparent;
          color: #880E4F;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
        }

        .category-filters button.active {
          background: #D81B60;
          color: #FFFFFF;
          border-color: #D81B60;
        }

        .category-filters button:hover:not(.active) {
          border-color: #D81B60;
        }

        .products-search {
          display: flex;
          gap: 12px;
        }

        .products-search input {
          padding: 10px 16px;
          border: 2px solid #F8BBD0;
          border-radius: 20px;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          color: #880E4F;
          outline: none;
          width: 200px;
          transition: border-color 0.3s;
        }

        .products-search input:focus {
          border-color: #D81B60;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .product-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 16px;
          border: 1px solid #F8BBD0;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }

        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.1);
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

        .add-to-cart-btn {
          width: 100%;
          padding: 10px;
          margin-top: 12px;
          border: none;
          border-radius: 12px;
          background: #D81B60;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
        }

        .add-to-cart-btn:hover {
          background: #880E4F;
          transform: scale(1.02);
        }

        .no-results {
          text-align: center;
          padding: 60px 20px;
          color: #880E4F;
        }

        .no-results h3 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          margin-bottom: 8px;
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
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .products-controls {
            flex-direction: column;
            align-items: stretch;
          }
          .products-search input {
            width: 100%;
          }
          .products-header h1 {
            font-size: 30px;
          }
        }

        @media (max-width: 480px) {
          .products-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .product-image-wrap {
            height: 150px;
          }
        }
      `}</style>

      <div className="products-page">
        {notification && (
          <div className="notification-toast">
            <span className="notif-icon">✓</span>
            <div>
              <div className="notif-title">Added to Bag!</div>
              <div className="notif-desc">{notification} added successfully.</div>
            </div>
          </div>
        )}

        <div className="products-header">
          <h1>Our Products</h1>
          <p>Discover our curated collection of premium beauty products</p>
        </div>

        <div className="products-controls">
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
          <div className="products-search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="no-results">
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((item) => (
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
                <button
                  className="add-to-cart-btn"
                  onClick={() => {
                    addToCart(item, 1);
                    showNotification(item.name);
                  }}
                >
                  Add to Bag
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Products;