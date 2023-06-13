import React from 'react';
import Canada_ from './../Icons/canada.svg';
const Canada = (props) => {
  return (
    <img src={Canada_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Canada;
