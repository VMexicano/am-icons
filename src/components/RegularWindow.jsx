import React from 'react';
import RegularWindow_ from './../Icons/regularWindow.svg';
const RegularWindow = (props) => {
  return (
    <img src={RegularWindow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RegularWindow;
