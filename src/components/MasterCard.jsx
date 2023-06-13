import React from 'react';
import MasterCard_ from './../Icons/masterCard.svg';
const MasterCard = (props) => {
  return (
    <img src={MasterCard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MasterCard;
