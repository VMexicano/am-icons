import React from 'react';
import KitExperto_ from './../Icons/kitExperto.svg';
const KitExperto = (props) => {
  return (
    <img src={KitExperto_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default KitExperto;
