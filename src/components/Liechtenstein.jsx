import React from 'react';
import Liechtenstein_ from './../Icons/liechtenstein.svg';
const Liechtenstein = (props) => {
  return (
    <img src={Liechtenstein_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Liechtenstein;
