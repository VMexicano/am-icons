import React from 'react';
import Signal_ from './../Icons/signal.svg';
const Signal = (props) => {
  return (
    <img src={Signal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Signal;
