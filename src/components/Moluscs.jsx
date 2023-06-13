import React from 'react';
import Moluscs_ from './../Icons/moluscs.svg';
const Moluscs = (props) => {
  return (
    <img src={Moluscs_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Moluscs;
