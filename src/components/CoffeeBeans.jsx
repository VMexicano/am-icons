import React from 'react';
import CoffeeBeans_ from './../Icons/coffeeBeans.svg';
const CoffeeBeans = (props) => {
  return (
    <img src={CoffeeBeans_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CoffeeBeans;
