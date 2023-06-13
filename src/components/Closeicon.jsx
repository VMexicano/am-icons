import React from 'react';
import Closeicon_ from './../Icons/closeicon.svg';
const Closeicon = (props) => {
  return (
    <img src={Closeicon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Closeicon;
