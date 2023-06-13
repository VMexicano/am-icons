import React from 'react';
import Notifcation_ from './../Icons/notifcation.svg';
const Notifcation = (props) => {
  return (
    <img src={Notifcation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Notifcation;
