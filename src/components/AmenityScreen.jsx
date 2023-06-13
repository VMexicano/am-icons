import React from 'react';
import AmenityScreen_ from './../Icons/amenityScreen.svg';
const AmenityScreen = (props) => {
  return (
    <img src={AmenityScreen_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityScreen;
