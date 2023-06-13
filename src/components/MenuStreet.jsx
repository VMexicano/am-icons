import React from 'react';
import MenuStreet_ from './../Icons/menuStreet.svg';
const MenuStreet = (props) => {
  return (
    <img src={MenuStreet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MenuStreet;
