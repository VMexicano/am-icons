import React from 'react';
import Clouds2_ from './../Icons/clouds2.svg';
const Clouds2 = (props) => {
  return (
    <img src={Clouds2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clouds2;
