import React from 'react';
import Screen_ from './../Icons/screen.svg';
const Screen = (props) => {
  return (
    <img src={Screen_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Screen;
