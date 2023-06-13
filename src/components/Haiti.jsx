import React from 'react';
import Haiti_ from './../Icons/haiti.svg';
const Haiti = (props) => {
  return (
    <img src={Haiti_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Haiti;
