import React from 'react';
import Estonia_ from './../Icons/estonia.svg';
const Estonia = (props) => {
  return (
    <img src={Estonia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Estonia;
