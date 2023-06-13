import React from 'react';
import Notificationon_ from './../Icons/notificationon.svg';
const Notificationon = (props) => {
  return (
    <img src={Notificationon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Notificationon;
