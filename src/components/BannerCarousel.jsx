// src/components/BannerCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';

// Import banner images
import c1 from '../assets/banners/c1.jpg';
import b1 from '../assets/banners/b1.jpg';
import b2 from '../assets/banners/b2.jpeg';

const banners = [
  {
    id: '1',
    title: 'High quality sofa\nstarted',
    discount: '70%',
    cta: 'See all items',
    image: c1,
  },
  {
    id: '2',
    title: 'Modern chair\ncollection',
    discount: '50%',
    cta: 'Shop now',
    image: b1,
  },
  {
    id: '3',
    title: 'Premium tables\navailable',
    discount: '40%',
    cta: 'Explore',
    image: b2,
  },
];

const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const totalSlides = banners.length;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <style>{`
        .banner-carousel {
          width: 100%;
          overflow: hidden;
          border-radius: 20px;
          position: relative;
          margin: 8px 0;
        }

        .banner-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .banner-slide {
          min-width: 100%;
          padding: 0 4px;
        }

        .banner-wrapper {
          margin: 0 12px;
          border-radius: 20px;
          overflow: hidden;
          background: #FCF8F2;
          box-shadow: 0 8px 25px rgba(92, 58, 33, 0.12);
        }

        .banner-image {
          width: 100%;
          height: 300px;
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
        }

        .banner-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
        }

        .banner-content {
          position: relative;
          z-index: 2;
          padding: 20px 24px 32px;
          width: 100%;
        }

        .banner-title {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: #FFFFFF;
          line-height: 1.3;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          white-space: pre-line;
        }

        .discount-row {
          display: flex;
          align-items: flex-end;
          margin-top: 4px;
        }

        .discount-text {
          font-family: 'Montserrat', sans-serif;
          font-size: 56px;
          font-weight: 700;
          color: #FFFFFF;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .off-text {
          font-size: 26px;
          color: #FFFFFF;
          margin-bottom: 10px;
          margin-left: 6px;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .banner-link {
          font-size: 16px;
          color: #FFFFFF;
          margin-top: 12px;
          display: inline-block;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: transform 0.3s;
        }

        .banner-link:hover {
          transform: translateX(4px);
        }

        .dot-container {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 3;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: #FFD966;
          width: 10px;
          height: 10px;
        }

        @media (max-width: 768px) {
          .banner-image {
            height: 220px;
          }
          .banner-title {
            font-size: 24px;
          }
          .discount-text {
            font-size: 40px;
          }
          .off-text {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .banner-image {
            height: 180px;
          }
          .banner-title {
            font-size: 18px;
          }
          .discount-text {
            font-size: 32px;
          }
          .off-text {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="banner-carousel">
        <div
          className="banner-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((item) => (
            <div key={item.id} className="banner-slide">
              <div className="banner-wrapper">
                <div
                  className="banner-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="banner-gradient" />
                  <div className="banner-content">
                    <h2 className="banner-title">{item.title}</h2>
                    <div className="discount-row">
                      <span className="discount-text">{item.discount}</span>
                      <span className="off-text"> off</span>
                    </div>
                    <span className="banner-link">{item.cta} →</span>
                  </div>
                  <div className="dot-container">
                    {banners.map((_, i) => (
                      <span
                        key={i}
                        className={`dot ${currentIndex === i ? 'active' : ''}`}
                        onClick={() => goToSlide(i)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerCarousel;