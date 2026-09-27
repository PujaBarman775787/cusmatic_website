import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <>
      <style>{`
        .success-page {
          max-width: 600px;
          margin: 60px auto;
          text-align: center;
          padding: 60px 40px;
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #F8BBD0;
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.08);
        }

        .success-page .icon {
          font-size: 80px;
          margin-bottom: 24px;
        }

        .success-page h1 {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #880E4F;
          margin-bottom: 12px;
        }

        .success-page p {
          color: #D81B60;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .success-page .btn-home {
          display: inline-block;
          padding: 16px 48px;
          background: #D81B60;
          color: #FFFFFF;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 700;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 20px rgba(216, 27, 96, 0.3);
          transition: all 0.3s;
        }

        .success-page .btn-home:hover {
          background: #880E4F;
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .success-page {
            margin: 30px 16px;
            padding: 40px 20px;
          }
          .success-page h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="success-page">
        <div className="icon">✅</div>
        <h1>Order Confirmed!</h1>
        <p>
          Thank you for shopping with us. Your order has been successfully placed
          and is being prepared for delivery.
        </p>
        <Link to="/" className="btn-home">Back to Home</Link>
      </div>
    </>
  );
};

export default Success;