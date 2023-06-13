import React from 'react';
import PictogramGift_ from './../Icons/pictogramGift.svg';
const PictogramGift = (props) => {
  return (
    <img src={PictogramGift_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramGift;
