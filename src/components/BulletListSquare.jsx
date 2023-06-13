import React from 'react';
import BulletListSquare_ from './../Icons/bulletListSquare.svg';
const BulletListSquare = (props) => {
  return (
    <img src={BulletListSquare_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BulletListSquare;
