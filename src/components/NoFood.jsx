import React from 'react';
import NoFood_ from './../Icons/noFood.svg';
const NoFood = (props) => {
  return (
    <img src={NoFood_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NoFood;
