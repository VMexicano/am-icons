import React from 'react';
import StoreCreditCard_ from './../Icons/storeCreditCard.svg';
const StoreCreditCard = (props) => {
  return (
    <img src={StoreCreditCard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StoreCreditCard;
