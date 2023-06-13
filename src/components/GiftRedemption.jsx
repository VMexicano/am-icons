import React from 'react';
import GiftRedemption_ from './../Icons/giftRedemption.svg';
const GiftRedemption = (props) => {
  return (
    <img src={GiftRedemption_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default GiftRedemption;
