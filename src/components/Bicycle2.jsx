import React from 'react';
import Bicycle2_ from './../Icons/bicycle2.svg';
const Bicycle2 = (props) => {
  return (
    <img src={Bicycle2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Bicycle2;
