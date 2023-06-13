import React from 'react';
import Notificationoff_ from './../Icons/notificationoff.svg';
const Notificationoff = (props) => {
  return (
    <img src={Notificationoff_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Notificationoff;
