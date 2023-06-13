import React from 'react';
import RecuperacinDeMaletas_ from './../Icons/recuperacinDeMaletas.svg';
const RecuperacinDeMaletas = (props) => {
  return (
    <img src={RecuperacinDeMaletas_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RecuperacinDeMaletas;
