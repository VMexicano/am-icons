import React from 'react';
import Blood_ from './../Icons/blood.svg';
const Blood = (props) => {
  return (
    <img src={Blood_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Blood;
