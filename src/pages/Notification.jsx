import React from 'react';

const notifications = [
  {
    id: '1',
    type: 'order',
    title: 'Order Confirmed',
    desc: 'Your order #ORD‑1248 has been confirmed and is being prepared.',
    time: '2 min ago',
    unread: true,
  },
  {
    id: '2',
    type: 'promo',
    title: 'Flash Sale! 🔥',
    desc: 'Get 30% off all lipsticks and serums. Offer ends tomorrow.',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: '3',
    type: 'delivery',
    title: 'Out for Delivery',
    desc: 'Your Radiance Serum is on its way. Track your package now.',
    time: 'Yesterday',
    unread: false,
  },
  {
    id: '4',
    type: 'system',
    title: 'Password Changed',
    desc: 'Your account password was updated successfully.',
    time: '2 days ago',
    unread: false,
  },
  {
    id: '5',
    type: 'wishlist',
    title: 'Wishlist Alert',
    desc: "The Velvet Matte Lipstick is back in stock! Grab it before it's gone.",
    time: '3 days ago',
    unread: false,
  },
];

const getIcon = (type) => {
  const icons = {
    order: '📦',
    promo: '🏷️',
    delivery: '🚗',
    system: '🛡️',
    wishlist: '❤️',
  };
  return icons[type] || '🔔';
};

const Notification = () => {
  return (
    <>
      <style>{`
        .notif-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 24px;
        }

        .notif-page h1 {
          font-family: 'Playfair Display', serif;
          font-size: 36px;
          color: #880E4F;
          margin-bottom: 32px;
        }

        .notif-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .notif-card {
          display: flex;
          gap: 16px;
          background: #FFFFFF;
          border-radius: 20px;
          padding: 20px;
          border: 1px solid #FCE4EC;
          box-shadow: 0 4px 15px rgba(136, 14, 79, 0.04);
          align-items: flex-start;
          transition: transform 0.2s;
        }

        .notif-card:hover {
          transform: translateY(-2px);
        }

        .notif-card.unread {
          background: #FFF0F5;
          border-color: #F8BBD0;
        }

        .notif-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #FCE4EC;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .notif-card.unread .notif-icon {
          border-color: #F8BBD0;
        }

        .notif-content { flex: 1; }

        .notif-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .notif-title {
          font-size: 16px;
          font-weight: 700;
          color: #880E4F;
          font-family: 'Montserrat', sans-serif;
        }

        .notif-card.unread .notif-title {
          color: #D81B60;
        }

        .notif-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #D81B60;
          flex-shrink: 0;
        }

        .notif-desc {
          font-size: 14px;
          color: #880E4F;
          line-height: 1.5;
          margin-bottom: 6px;
          font-family: 'Montserrat', sans-serif;
        }

        .notif-time {
          font-size: 12px;
          color: #F48FB1;
          font-family: 'Montserrat', sans-serif;
        }

        @media (max-width: 480px) {
          .notif-page {
            padding: 20px 16px;
          }
          .notif-page h1 {
            font-size: 28px;
          }
          .notif-card {
            padding: 16px;
          }
        }
      `}</style>

      <div className="notif-page">
        <h1>Notifications</h1>

        <div className="notif-list">
          {notifications.map((item) => (
            <div key={item.id} className={`notif-card ${item.unread ? 'unread' : ''}`}>
              <div className="notif-icon">{getIcon(item.type)}</div>
              <div className="notif-content">
                <div className="notif-header">
                  <span className="notif-title">{item.title}</span>
                  {item.unread && <span className="notif-dot" />}
                </div>
                <div className="notif-desc">{item.desc}</div>
                <div className="notif-time">{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;