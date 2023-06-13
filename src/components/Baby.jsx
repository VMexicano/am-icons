import React from 'react';
import Baby_ from './../Icons/baby.svg';
const Baby = (props) => {
  return (
    <img src={Baby_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Baby;
