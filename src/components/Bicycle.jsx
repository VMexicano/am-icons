import React from 'react';
import Bicycle_ from './../Icons/bicycle.svg';
const Bicycle = (props) => {
  return (
    <img src={Bicycle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bicycle;
