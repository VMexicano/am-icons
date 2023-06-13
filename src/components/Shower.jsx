import React from 'react';
import Shower_ from './../Icons/shower.svg';
const Shower = (props) => {
  return (
    <img src={Shower_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Shower;
