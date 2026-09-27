import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <>
      <style>{`
        .auth-container {
          max-width: 480px;
          margin: 40px auto;
          padding: 40px 30px;
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #F8BBD0;
          box-shadow: 0 8px 30px rgba(136, 14, 79, 0.08);
        }

        .auth-container h2 {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          color: #880E4F;
          text-align: center;
          margin-bottom: 8px;
        }

        .auth-container p {
          text-align: center;
          color: #D81B60;
          font-size: 14px;
          margin-bottom: 30px;
        }

        .auth-group {
          margin-bottom: 20px;
        }

        .auth-group label {
          display: block;
          font-weight: 600;
          color: #880E4F;
          margin-bottom: 6px;
          font-size: 14px;
          font-family: 'Montserrat', sans-serif;
        }

        .auth-group input {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #F8BBD0;
          border-radius: 12px;
          font-size: 15px;
          font-family: 'Montserrat', sans-serif;
          color: #880E4F;
          outline: none;
          transition: border-color 0.3s;
        }

        .auth-group input:focus {
          border-color: #D81B60;
        }

        .auth-password-wrapper {
          position: relative;
        }

        .auth-password-wrapper input {
          padding-right: 48px;
        }

        .auth-toggle-password {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
        }

        .auth-forgot {
          text-align: right;
          margin-bottom: 24px;
        }

        .auth-forgot a {
          color: #D81B60;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .auth-forgot a:hover {
          color: #880E4F;
        }

        .btn-auth {
          width: 100%;
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

        .btn-auth:hover {
          background: #880E4F;
          transform: translateY(-2px);
        }

        .auth-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 24px 0;
        }

        .auth-divider::before,
        .auth-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #F8BBD0;
        }

        .auth-divider span {
          color: #F48FB1;
          font-size: 14px;
        }

        .auth-signup-link {
          text-align: center;
          font-size: 14px;
          color: #880E4F;
        }

        .auth-signup-link a {
          color: #D81B60;
          font-weight: 700;
          text-decoration: none;
        }

        .auth-signup-link a:hover {
          color: #880E4F;
          text-decoration: underline;
        }

        @media (max-width: 480px) {
          .auth-container {
            margin: 20px 16px;
            padding: 24px 20px;
          }
          .auth-container h2 {
            font-size: 26px;
          }
        }
      `}</style>

      <div className="auth-container">
        <h2>Welcome Back</h2>
        <p>Sign in to your account</p>

        <form onSubmit={handleLogin}>
          <div className="auth-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-group">
            <label>Password</label>
            <div className="auth-password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="auth-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="auth-forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-auth">Sign In</button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <div className="auth-signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default LogIn;