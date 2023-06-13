import React from 'react';
import ConstructionCart_ from './../Icons/constructionCart.svg';
const ConstructionCart = (props) => {
  return (
    <img src={ConstructionCart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ConstructionCart;
