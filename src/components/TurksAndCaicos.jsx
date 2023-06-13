import React from 'react';
import TurksAndCaicos_ from './../Icons/turksAndCaicos.svg';
const TurksAndCaicos = (props) => {
  return (
    <img src={TurksAndCaicos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TurksAndCaicos;
