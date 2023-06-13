import React from 'react';
import Print_ from './../Icons/print.svg';
const Print = (props) => {
  return (
    <img src={Print_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Print;
