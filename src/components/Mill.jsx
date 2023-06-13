import React from 'react';
import Mill_ from './../Icons/mill.svg';
const Mill = (props) => {
  return (
    <img src={Mill_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mill;
