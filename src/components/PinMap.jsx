import React from 'react';
import PinMap_ from './../Icons/pinMap.svg';
const PinMap = (props) => {
  return (
    <img src={PinMap_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PinMap;
