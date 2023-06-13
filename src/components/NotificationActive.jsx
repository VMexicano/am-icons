import React from 'react';
import NotificationActive_ from './../Icons/notificationActive.svg';
const NotificationActive = (props) => {
  return (
    <img src={NotificationActive_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotificationActive;
