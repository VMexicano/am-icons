import React from 'react';
import Travelinformation_ from './../Icons/travelinformation.svg';
const Travelinformation = (props) => {
  return (
    <img src={Travelinformation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Travelinformation;
