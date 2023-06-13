import React from 'react';
import PriceAlert_ from './../Icons/priceAlert.svg';
const PriceAlert = (props) => {
  return (
    <img src={PriceAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PriceAlert;
