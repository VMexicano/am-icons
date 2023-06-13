import React from 'react';
import Porfolio_ from './../Icons/porfolio.svg';
const Porfolio = (props) => {
  return (
    <img src={Porfolio_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Porfolio;
