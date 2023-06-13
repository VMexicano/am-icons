import React from 'react';
import PremierGift_ from './../Icons/premierGift.svg';
const PremierGift = (props) => {
  return (
    <img src={PremierGift_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierGift;
