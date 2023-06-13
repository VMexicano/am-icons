import React from 'react';
import Senegal_ from './../Icons/senegal.svg';
const Senegal = (props) => {
  return (
    <img src={Senegal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Senegal;
