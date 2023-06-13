import React from 'react';
import Lemon_ from './../Icons/lemon.svg';
const Lemon = (props) => {
  return (
    <img src={Lemon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lemon;
