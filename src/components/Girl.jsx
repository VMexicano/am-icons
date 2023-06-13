import React from 'react';
import Girl_ from './../Icons/girl.svg';
const Girl = (props) => {
  return (
    <img src={Girl_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Girl;
