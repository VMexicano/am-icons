import React from 'react';
import CoupleHeart_ from './../Icons/coupleHeart.svg';
const CoupleHeart = (props) => {
  return (
    <img src={CoupleHeart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CoupleHeart;
