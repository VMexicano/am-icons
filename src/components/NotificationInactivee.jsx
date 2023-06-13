import React from 'react';
import NotificationInactivee_ from './../Icons/notificationInactivee.svg';
const NotificationInactivee = (props) => {
  return (
    <img src={NotificationInactivee_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotificationInactivee;
