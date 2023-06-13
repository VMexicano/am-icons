import React from 'react';
import Sunglass_ from './../Icons/sunglass.svg';
const Sunglass = (props) => {
  return (
    <img src={Sunglass_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sunglass;
