import React from 'react';
import Boligrafo_ from './../Icons/boligrafo.svg';
const Boligrafo = (props) => {
  return (
    <img src={Boligrafo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Boligrafo;
