import React from 'react';
import Denmark_ from './../Icons/denmark.svg';
const Denmark = (props) => {
  return (
    <img src={Denmark_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Denmark;
