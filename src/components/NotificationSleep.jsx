import React from 'react';
import NotificationSleep_ from './../Icons/notificationSleep.svg';
const NotificationSleep = (props) => {
  return (
    <img src={NotificationSleep_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotificationSleep;
