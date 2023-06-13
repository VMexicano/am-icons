import React from 'react';
import Idioma_ from './../Icons/idioma.svg';
const Idioma = (props) => {
  return (
    <img src={Idioma_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Idioma;
