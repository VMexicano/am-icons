import React from 'react';
import Cherry_ from './../Icons/cherry.svg';
const Cherry = (props) => {
  return (
    <img src={Cherry_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cherry;
