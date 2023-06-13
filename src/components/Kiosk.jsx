import React from 'react';
import Kiosk_ from './../Icons/kiosk.svg';
const Kiosk = (props) => {
  return (
    <img src={Kiosk_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Kiosk;
