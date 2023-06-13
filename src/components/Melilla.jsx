import React from 'react';
import Melilla_ from './../Icons/melilla.svg';
const Melilla = (props) => {
  return (
    <img src={Melilla_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Melilla;
