import React from 'react';
import Paper1_ from './../Icons/paper1.svg';
const Paper1 = (props) => {
  return (
    <img src={Paper1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Paper1;
