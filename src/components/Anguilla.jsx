import React from 'react';
import Anguilla_ from './../Icons/anguilla.svg';
const Anguilla = (props) => {
  return (
    <img src={Anguilla_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Anguilla;
