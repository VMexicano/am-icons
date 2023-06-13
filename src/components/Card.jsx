import React from 'react';
import Card_ from './../Icons/card.svg';
const Card = (props) => {
  return (
    <img src={Card_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Card;
