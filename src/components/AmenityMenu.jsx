import React from 'react';
import AmenityMenu_ from './../Icons/amenityMenu.svg';
const AmenityMenu = (props) => {
  return (
    <img src={AmenityMenu_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmenityMenu;
