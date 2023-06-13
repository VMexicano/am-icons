import React from 'react';
import AmenitySandwich_ from './../Icons/amenitySandwich.svg';
const AmenitySandwich = (props) => {
  return (
    <img src={AmenitySandwich_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenitySandwich;
