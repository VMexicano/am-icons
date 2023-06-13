import React from 'react';
import Mountains_ from './../Icons/mountains.svg';
const Mountains = (props) => {
  return (
    <img src={Mountains_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mountains;
