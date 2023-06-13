import React from 'react';
import CardCobranded_ from './../Icons/cardCobranded.svg';
const CardCobranded = (props) => {
  return (
    <img src={CardCobranded_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CardCobranded;
