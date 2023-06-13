import React from 'react';
import Fish2_ from './../Icons/fish2.svg';
const Fish2 = (props) => {
  return (
    <img src={Fish2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fish2;
