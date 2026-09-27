import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const { subtotal = 0, discount = 0 } = state;

  const [shippingType, setShippingType] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');

  const deliveryFee = shippingType === 'express' ? 25.00 : 15.00;
  const estimatedTax = subtotal * 0.05;
  const grandTotal = subtotal - discount + deliveryFee + estimatedTax;

  const handlePayment = () => {
    navigate('/success');
  };

  return (
    <>
      <style>{`
        .checkout-page {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .checkout-page h1 {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #880E4F;
          margin-bottom: 32px;
        }

        .checkout-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
        }

        .checkout-section {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 24px;
          border: 1px solid #F8BBD0;
          margin-bottom: 24px;
        }

        .checkout-section h3 {
          font-family: 'Playfair Display', serif;
          font-size: 20px;
          color: #880E4F;
          margin-bottom: 16px;
        }

        .checkout-section .address {
          color: #880E4F;
          line-height: 1.6;
        }

        .checkout-section .address strong {
          display: block;
          font-size: 16px;
        }

        .shipping-option {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px;
          border-radius: 16px;
          border: 2px solid #FCE4EC;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .shipping-option.active {
          border-color: #D81B60;
          background: #FFF0F5;
        }

        .shipping-option .left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .shipping-option .radio {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 2px solid #F8BBD0;
          flex-shrink: 0;
        }

        .shipping-option .radio.active {
          border-color: #D81B60;
          background: #D81B60;
        }

        .shipping-option .title {
          font-weight: 600;
          color: #880E4F;
        }

        .shipping-option .date {
          font-size: 13px;
          color: #D81B60;
        }

        .shipping-option .price {
          font-weight: 700;
          color: #D81B60;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 15px;
          color: #880E4F;
          border-bottom: 1px solid #FCE4EC;
          font-family: 'Montserrat', sans-serif;
        }

        .summary-item.discount {
          color: #D81B60;
        }

        .summary-item.total {
          font-size: 20px;
          font-weight: 700;
          border-bottom: none;
          padding-top: 16px;
        }

        .summary-item.total span:last-child {
          color: #D81B60;
        }

        .btn-proceed {
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

        .btn-proceed:hover {
          background: #880E4F;
          transform: translateY(-2px);
        }

        .payment-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          z-index: 1000;
        }

        .payment-sheet {
          background: #FFFFFF;
          border-radius: 30px 30px 0 0;
          max-width: 600px;
          width: 100%;
          padding: 30px 24px 40px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .payment-sheet h3 {
          font-family: 'Playfair Display', serif;
          font-size: 24px;
          color: #880E4F;
          margin-bottom: 20px;
        }

        .payment-method {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          border-radius: 16px;
          border: 2px solid #FCE4EC;
          margin-bottom: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .payment-method.active {
          border-color: #D81B60;
          background: #FFF0F5;
        }

        .payment-method .pm-icon { font-size: 24px; }
        .payment-method .pm-name { flex: 1; font-weight: 500; color: #880E4F; }
        .payment-method .pm-arrow { color: #F8BBD0; }

        .card-form { margin: 20px 0; }

        .card-form .form-group {
          margin-bottom: 16px;
        }

        .card-form .form-group label {
          display: block;
          font-weight: 600;
          color: #880E4F;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .card-form .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #F8BBD0;
          border-radius: 12px;
          font-size: 15px;
          font-family: 'Montserrat', sans-serif;
          color: #880E4F;
          outline: none;
        }

        .card-form .form-group input:focus {
          border-color: #D81B60;
        }

        .card-form .row {
          display: flex;
          gap: 16px;
        }

        .card-form .row .form-group { flex: 1; }

        .btn-pay {
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
        }

        .btn-pay:hover {
          background: #880E4F;
        }

        .btn-close {
          float: right;
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #880E4F;
        }

        @media (max-width: 768px) {
          .checkout-grid {
            grid-template-columns: 1fr;
          }
          .checkout-page {
            padding: 20px 16px;
          }
          .checkout-page h1 {
            font-size: 28px;
          }
          .payment-sheet {
            padding: 20px 16px 30px;
          }
        }
      `}</style>

      <div className="checkout-page">
        <h1>Checkout</h1>

        <div className="checkout-grid">
          <div>
            <div className="checkout-section">
              <h3>📦 Delivery Address</h3>
              <div className="address">
                <strong>Home</strong>
                123 Designer Avenue, Suite 4B<br />
                New York, NY 10001
              </div>
            </div>

            <div className="checkout-section">
              <h3>🚚 Shipping Method</h3>
              <div
                className={`shipping-option ${shippingType === 'standard' ? 'active' : ''}`}
                onClick={() => setShippingType('standard')}
              >
                <div className="left">
                  <div className={`radio ${shippingType === 'standard' ? 'active' : ''}`} />
                  <div>
                    <div className="title">Standard Delivery</div>
                    <div className="date">Est. 3-5 business days</div>
                  </div>
                </div>
                <span className="price">$15.00</span>
              </div>
              <div
                className={`shipping-option ${shippingType === 'express' ? 'active' : ''}`}
                onClick={() => setShippingType('express')}
              >
                <div className="left">
                  <div className={`radio ${shippingType === 'express' ? 'active' : ''}`} />
                  <div>
                    <div className="title">Express Delivery</div>
                    <div className="date">Est. 1-2 business days</div>
                  </div>
                </div>
                <span className="price">$25.00</span>
              </div>
            </div>
          </div>

          <div>
            <div className="checkout-section">
              <h3>Order Summary</h3>
              <div className="summary-item">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-item">
                <span>Shipping</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="summary-item discount">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="summary-item">
                <span>Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="summary-item total">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
              <button className="btn-proceed" onClick={() => setShowPaymentModal(true)}>
                Proceed to Payment →
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPaymentModal && (
        <div className="payment-modal" onClick={() => setShowPaymentModal(false)}>
          <div className="payment-sheet" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close" onClick={() => setShowPaymentModal(false)}>✕</button>
            <h3>Select Payment Method</h3>

            <div
              className={`payment-method ${selectedPayment === 'card' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('card')}
            >
              <span className="pm-icon">💳</span>
              <span className="pm-name">Credit / Debit Card</span>
              <span className="pm-arrow">›</span>
            </div>

            <div
              className={`payment-method ${selectedPayment === 'paypal' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('paypal')}
            >
              <span className="pm-icon">🔷</span>
              <span className="pm-name">PayPal</span>
              <span className="pm-arrow">›</span>
            </div>

            <div
              className={`payment-method ${selectedPayment === 'gpay' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('gpay')}
            >
              <span className="pm-icon">🔵</span>
              <span className="pm-name">Google Pay</span>
              <span className="pm-arrow">›</span>
            </div>

            {selectedPayment === 'card' && (
              <div className="card-form">
                <div className="form-group">
                  <label>Card Number</label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength={19}
                  />
                </div>
                <div className="row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      maxLength={5}
                    />
                  </div>
                  <div className="form-group">
                    <label>CVV</label>
                    <input
                      type="password"
                      placeholder="123"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value)}
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>
            )}

            <button className="btn-pay" onClick={handlePayment}>
              Pay ${grandTotal.toFixed(2)}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;