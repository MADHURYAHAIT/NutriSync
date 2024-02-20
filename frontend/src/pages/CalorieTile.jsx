
import React from 'react';
import '../css/Notification.css';
const CalTile = ({ title, text }) => {
  return (
    <div className="notification-item" >
      <div className="notification-title"><b>Item : {title}</b></div>
      <div className="notification-text"><p>Calories : <b>{text} Cal </b> </p></div>

    </div>
  );
};

export default CalTile;
