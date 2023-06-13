import React from 'react';
import AntenaSignal_ from './../Icons/antenaSignal.svg';
const AntenaSignal = (props) => {
  return (
    <img src={AntenaSignal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AntenaSignal;
