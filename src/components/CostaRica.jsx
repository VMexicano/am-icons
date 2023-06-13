import React from 'react';
import CostaRica_ from './../Icons/costaRica.svg';
const CostaRica = (props) => {
  return (
    <img src={CostaRica_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CostaRica;
