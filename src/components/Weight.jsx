import React from 'react';
import Weight_ from './../Icons/weight.svg';
const Weight = (props) => {
  return (
    <img src={Weight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Weight;
