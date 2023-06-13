import React from 'react';
import Woman1_ from './../Icons/woman1.svg';
const Woman1 = (props) => {
  return (
    <img src={Woman1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Woman1;
