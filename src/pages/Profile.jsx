import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [user] = useState({
    name: 'Bruno Pham',
    email: 'bruno203@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=880&auto=format&fit=crop',
  });

  const menuItems = [
    { icon: '🛒', title: 'My Orders', sub: 'Track, return or buy again', badge: '3 new' },
    { icon: '❤️', title: 'Wishlist', sub: 'Your saved items' },
    { icon: '📍', title: 'Shipping Addresses', sub: 'Manage delivery locations' },
    { icon: '💳', title: 'Payment Methods', sub: 'Visa •••• 4242' },
    { icon: '🔔', title: 'Notifications', sub: 'Push & email alerts', badge: 'ON' },
    { icon: '🛡️', title: 'Privacy & Security', sub: 'Face ID, 2‑step verification' },
    { icon: 'ℹ️', title: 'Help & FAQ', sub: 'Contact us' },
  ];

  return (
    <>
      <style>{`
        .profile-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .profile-card {
          background: #FFFFFF;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid #F8BBD0;
          display: flex;
          align-items: center;
          gap: 32px;
          margin-bottom: 32px;
        }

        .profile-avatar {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          border: 4px solid #FFF0F5;
          object-fit: cover;
        }

        .profile-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          color: #880E4F;
        }

        .profile-info p {
          color: #D81B60;
          font-size: 15px;
        }

        .profile-stats {
          display: flex;
          gap: 32px;
          margin-top: 12px;
        }

        .profile-stats div {
          text-align: center;
        }

        .profile-stats .num {
          font-size: 22px;
          font-weight: 700;
          color: #D81B60;
        }

        .profile-stats .label {
          font-size: 13px;
          color: #F48FB1;
        }

        .profile-menu {
          background: #FFFFFF;
          border-radius: 24px;
          border: 1px solid #F8BBD0;
          overflow: hidden;
        }

        .profile-menu-item {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid #FCE4EC;
          cursor: pointer;
          transition: background 0.3s;
        }

        .profile-menu-item:last-child {
          border-bottom: none;
        }

        .profile-menu-item:hover {
          background: #FFF0F5;
        }

        .profile-menu-item .icon {
          font-size: 22px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFF0F5;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 16px;
        }

        .profile-menu-item .content {
          flex: 1;
        }

        .profile-menu-item .title {
          font-weight: 600;
          color: #880E4F;
          font-family: 'Montserrat', sans-serif;
        }

        .profile-menu-item .sub {
          font-size: 13px;
          color: #F48FB1;
          margin-top: 2px;
        }

        .profile-menu-item .badge {
          background: #D81B60;
          color: #FFFFFF;
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 700;
          margin-right: 12px;
        }

        .profile-menu-item .arrow {
          color: #F8BBD0;
          font-size: 20px;
        }

        .profile-logout {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          margin-top: 24px;
          padding: 16px;
          border: 2px solid #FFEBEB;
          border-radius: 16px;
          background: #FFFFFF;
          color: #FF4B4B;
          font-weight: 700;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          font-family: 'Montserrat', sans-serif;
        }

        .profile-logout:hover {
          background: #FFF5F5;
          border-color: #FF4B4B;
        }

        @media (max-width: 600px) {
          .profile-card {
            flex-direction: column;
            text-align: center;
            padding: 24px;
          }
          .profile-stats {
            justify-content: center;
          }
          .profile-page {
            padding: 20px 16px;
          }
          .profile-menu-item {
            padding: 14px 16px;
          }
        }
      `}</style>

      <div className="profile-page">
        <div className="profile-card">
          <img src={user.avatar} alt={user.name} className="profile-avatar" />
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className="profile-stats">
              <div>
                <div className="num">10</div>
                <div className="label">Orders</div>
              </div>
              <div>
                <div className="num">24</div>
                <div className="label">Wishlist</div>
              </div>
              <div>
                <div className="num">3</div>
                <div className="label">Addresses</div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-menu">
          {menuItems.map((item, index) => (
            <div key={index} className="profile-menu-item">
              <div className="icon">{item.icon}</div>
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="sub">{item.sub}</div>
              </div>
              <div className="badge">{item.badge}</div>
              <div className="arrow">›</div>
            </div>
          ))}
        </div>

        <button className="profile-logout">
          🚪 Log Out
        </button>
      </div>
    </>
  );
};

export default Profile;