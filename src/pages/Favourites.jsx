import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import { useCart } from '../context/CartContext';

const Favourites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  if (favorites.length === 0) {
    return (
      <>
        <style>{`
          .fav-empty {
            max-width: 600px;
            margin: 60px auto;
            text-align: center;
            padding: 40px 20px;
          }
          .fav-empty h2 {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            color: #880E4F;
            margin-bottom: 12px;
          }
          .fav-empty p {
            color: #D81B60;
            margin-bottom: 24px;
          }
          .fav-empty .btn-shop {
            display: inline-block;
            padding: 14px 40px;
            background: #D81B60;
            color: #FFFFFF;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 700;
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
        <div className="fav-empty">
          <h2>No Favourites Yet</h2>
          <p>Tap the heart icon on products to save them here for later.</p>
          <Link to="/products" className="btn-shop">Discover Products →</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .fav-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .fav-page h1 {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #880E4F;
          margin-bottom: 32px;
        }

        .fav-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .fav-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 16px;
          border: 1px solid #F8BBD0;
          transition: transform 0.3s, box-shadow 0.3s;
          position: relative;
        }

        .fav-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.1);
        }

        .fav-image-wrap {
          height: 200px;
          background: #FFF0F5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 12px;
        }

        .fav-image-wrap img {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        .fav-link { text-decoration: none; display: block; }

        .fav-remove {
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
        }

        .fav-info { padding: 4px 4px 8px; }

        .fav-rating {
          font-size: 13px;
          color: #D81B60;
          margin-bottom: 4px;
        }

        .fav-name {
          font-size: 15px;
          color: #880E4F;
          font-weight: 500;
          margin-bottom: 4px;
          font-family: 'Montserrat', sans-serif;
        }

        .fav-price {
          font-size: 18px;
          font-weight: 700;
          color: #D81B60;
        }

        .fav-add {
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

        .fav-add:hover {
          background: #880E4F;
          transform: scale(1.02);
        }

        @media (max-width: 992px) {
          .fav-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .fav-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .fav-page h1 {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .fav-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .fav-image-wrap {
            height: 150px;
          }
          .fav-page {
            padding: 20px 16px;
          }
        }
      `}</style>

      <div className="fav-page">
        <h1>My Favourites</h1>

        <div className="fav-grid">
          {favorites.map((item) => (
            <div key={item.id} className="fav-card">
              <Link to={`/product/${item.id}`} className="fav-link">
                <div className="fav-image-wrap">
                  <img src={item.image} alt={item.name} />
                  <button
                    className="fav-remove"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(item);
                    }}
                  >
                    ❤️
                  </button>
                </div>
                <div className="fav-info">
                  <div className="fav-rating">⭐ {item.rating || '4.8'}</div>
                  <div className="fav-name">{item.name}</div>
                  <div className="fav-price">${item.price}</div>
                </div>
              </Link>
              <button
                className="fav-add"
                onClick={() => {
                  addToCart(item, 1);
                }}
              >
                🛍️ Add to Bag
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favourites;