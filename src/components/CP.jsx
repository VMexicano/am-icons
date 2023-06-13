import React from 'react';
import CP_ from './../Icons/cP.svg';
const CP = (props) => {
  return (
    <img src={CP_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CP;
