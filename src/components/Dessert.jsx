import React from 'react';
import Dessert_ from './../Icons/dessert.svg';
const Dessert = (props) => {
  return (
    <img src={Dessert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Dessert;
