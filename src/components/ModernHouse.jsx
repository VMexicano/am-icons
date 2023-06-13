import React from 'react';
import ModernHouse_ from './../Icons/modernHouse.svg';
const ModernHouse = (props) => {
  return (
    <img src={ModernHouse_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ModernHouse;
