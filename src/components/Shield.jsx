import React from 'react';
import Shield_ from './../Icons/shield.svg';
const Shield = (props) => {
  return (
    <img src={Shield_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Shield;
