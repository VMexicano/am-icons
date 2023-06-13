import React from 'react';
import Tonga_ from './../Icons/tonga.svg';
const Tonga = (props) => {
  return (
    <img src={Tonga_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tonga;
