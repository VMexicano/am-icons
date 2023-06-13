import React from 'react';
import Man1_ from './../Icons/man1.svg';
const Man1 = (props) => {
  return (
    <img src={Man1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Man1;
