import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, totalPrice, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const deliveryFee = 15.00;
  const subtotal = totalPrice;

  const handleApplyCoupon = () => {
    const code = couponCode.toUpperCase();
    if (code === 'SAVE20') {
      setAppliedCoupon({ code: 'SAVE20', discount: subtotal * 0.2 });
    } else if (code === 'FREEDEL') {
      setAppliedCoupon({ code: 'FREEDEL', discount: deliveryFee });
    } else {
      alert('Invalid coupon code');
    }
  };

  const discount = appliedCoupon?.discount || 0;
  const finalDelivery = appliedCoupon?.code === 'FREEDEL' ? 0 : deliveryFee;
  const total = subtotal + finalDelivery - discount;

  if (cartItems.length === 0) {
    return (
      <>
        <style>{`
          .cart-empty {
            max-width: 600px;
            margin: 60px auto;
            text-align: center;
            padding: 40px 20px;
          }
          .cart-empty h2 {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            color: #880E4F;
            margin-bottom: 12px;
          }
          .cart-empty p {
            color: #D81B60;
            margin-bottom: 24px;
          }
          .cart-empty .btn-shop {
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
        <div className="cart-empty">
          <h2>Your bag is empty</h2>
          <p>Please select at least 1 item to proceed to checkout.</p>
          <Link to="/products" className="btn-shop">Start Shopping →</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .cart-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .cart-page h1 {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #880E4F;
          margin-bottom: 32px;
        }

        .cart-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .cart-items {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cart-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 16px;
          border: 1px solid #F8BBD0;
          transition: transform 0.3s;
        }

        .cart-item:hover {
          transform: translateY(-2px);
        }

        .cart-item-image {
          width: 80px;
          height: 80px;
          background: #FFF0F5;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          flex-shrink: 0;
        }

        .cart-item-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .cart-item-details {
          flex: 1;
        }

        .cart-item-name {
          font-size: 15px;
          color: #880E4F;
          font-weight: 500;
          font-family: 'Montserrat', sans-serif;
        }

        .cart-item-price {
          font-size: 18px;
          font-weight: 700;
          color: #D81B60;
          margin-top: 4px;
        }

        .cart-item-qty {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
          background: #FFFFFF;
          border: 1px solid #F8BBD0;
          border-radius: 16px;
          padding: 4px 6px;
          width: fit-content;
        }

        .cart-item-qty button {
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 50%;
          background: #FFF0F5;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #D81B60;
        }

        .cart-item-qty span {
          font-size: 16px;
          font-weight: 700;
          color: #D81B60;
          padding: 0 8px;
        }

        .cart-item-remove {
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          padding: 8px;
          color: #F48FB1;
          transition: color 0.3s;
        }

        .cart-item-remove:hover {
          color: #D81B60;
        }

        .cart-summary {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 24px;
          border: 1px solid #F8BBD0;
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        .cart-summary h3 {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          color: #880E4F;
          margin-bottom: 20px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 15px;
          color: #880E4F;
          border-bottom: 1px solid #FCE4EC;
          font-family: 'Montserrat', sans-serif;
        }

        .summary-row.discount {
          color: #D81B60;
        }

        .summary-row.total {
          font-size: 20px;
          font-weight: 700;
          border-bottom: none;
          padding-top: 16px;
        }

        .summary-row.total span:last-child {
          color: #D81B60;
        }

        .cart-coupon {
          display: flex;
          gap: 12px;
          margin: 16px 0;
        }

        .cart-coupon input {
          flex: 1;
          padding: 10px 16px;
          border: 2px solid #F8BBD0;
          border-radius: 12px;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
          color: #880E4F;
          outline: none;
        }

        .cart-coupon input:focus {
          border-color: #D81B60;
        }

        .cart-coupon button {
          padding: 10px 20px;
          border: none;
          border-radius: 12px;
          background: #D81B60;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          transition: background 0.3s;
        }

        .cart-coupon button:hover {
          background: #880E4F;
        }

        .cart-coupon .remove-coupon {
          background: #FFF0F5;
          color: #880E4F;
        }

        .cart-coupon .remove-coupon:hover {
          background: #FCE4EC;
        }

        .btn-checkout {
          width: 100%;
          padding: 16px;
          border: none;
          border-radius: 16px;
          background: #D81B60;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          box-shadow: 0 4px 20px rgba(216, 27, 96, 0.3);
          transition: all 0.3s;
          margin-top: 16px;
        }

        .btn-checkout:hover {
          background: #880E4F;
          transform: translateY(-2px);
        }

        .btn-clear {
          background: none;
          border: none;
          color: #F48FB1;
          font-size: 14px;
          cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          text-decoration: underline;
          margin-top: 8px;
        }

        .btn-clear:hover {
          color: #D81B60;
        }

        @media (max-width: 992px) {
          .cart-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .cart-page {
            padding: 20px 16px;
          }
          .cart-page h1 {
            font-size: 28px;
          }
          .cart-item {
            padding: 12px;
          }
          .cart-item-image {
            width: 60px;
            height: 60px;
          }
          .cart-summary {
            padding: 16px;
          }
        }
      `}</style>

      <div className="cart-page">
        <h1>My Bag</h1>

        <div className="cart-grid">
          <div className="cart-items">
            {cartItems.map((item) => {
              const price = parseFloat(item.price) || 0;
              return (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-price">${(price * item.quantity).toFixed(2)}</div>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => updateQuantity(item.id, 0)}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
            <button className="btn-clear" onClick={clearCart}>Clear Bag</button>
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span>{finalDelivery === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
            </div>
            {discount > 0 && (
              <div className="summary-row discount">
                <span>Discount ({appliedCoupon?.code})</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}

            <div className="cart-coupon">
              <input
                type="text"
                placeholder="Promo code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                disabled={!!appliedCoupon}
              />
              {appliedCoupon ? (
                <button className="remove-coupon" onClick={() => { setAppliedCoupon(null); setCouponCode(''); }}>
                  Remove
                </button>
              ) : (
                <button onClick={handleApplyCoupon}>Apply</button>
              )}
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" state={{ subtotal, discount, total }}>
              <button className="btn-checkout">Proceed to Checkout →</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;