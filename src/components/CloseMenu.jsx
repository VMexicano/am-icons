import React from 'react';
import CloseMenu_ from './../Icons/closeMenu.svg';
const CloseMenu = (props) => {
  return (
    <img src={CloseMenu_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CloseMenu;
