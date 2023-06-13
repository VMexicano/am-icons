import React from 'react';
import Fish_ from './../Icons/fish.svg';
const Fish = (props) => {
  return (
    <img src={Fish_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fish;
