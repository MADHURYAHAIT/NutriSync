// NotificationItem.jsx

import React from 'react';
import '../css/Notification.css';
const NotificationItem = ({ title, text, onClick }) => {
  return (
    <div className="notification-item" onClick={onClick}>
      <div className="notification-title">{title}</div>
      <div className="notification-text">{text}</div>
    </div>
  );
};

export default NotificationItem;
