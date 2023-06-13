import React from 'react';
import Mundo_ from './../Icons/mundo.svg';
const Mundo = (props) => {
  return (
    <img src={Mundo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mundo;
