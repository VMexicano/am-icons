import React from 'react';
import Machete_ from './../Icons/machete.svg';
const Machete = (props) => {
  return (
    <img src={Machete_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Machete;
