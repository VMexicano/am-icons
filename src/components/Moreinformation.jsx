import React from 'react';
import Moreinformation_ from './../Icons/moreinformation.svg';
const Moreinformation = (props) => {
  return (
    <img src={Moreinformation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Moreinformation;
