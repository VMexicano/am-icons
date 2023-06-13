import React from 'react';
import DirectionsSign_ from './../Icons/directionsSign.svg';
const DirectionsSign = (props) => {
  return (
    <img src={DirectionsSign_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DirectionsSign;
