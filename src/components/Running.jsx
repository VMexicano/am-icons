import React from 'react';
import Running_ from './../Icons/running.svg';
const Running = (props) => {
  return (
    <img src={Running_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Running;
