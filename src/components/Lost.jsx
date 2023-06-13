import React from 'react';
import Lost_ from './../Icons/lost.svg';
const Lost = (props) => {
  return (
    <img src={Lost_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lost;
