import React from 'react';
import Tote_ from './../Icons/tote.svg';
const Tote = (props) => {
  return (
    <img src={Tote_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tote;
