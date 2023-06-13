import React from 'react';
import NotificationSolid_ from './../Icons/notificationSolid.svg';
const NotificationSolid = (props) => {
  return (
    <img src={NotificationSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NotificationSolid;
