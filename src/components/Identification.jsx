import React from 'react';
import Identification_ from './../Icons/identification.svg';
const Identification = (props) => {
  return (
    <img src={Identification_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Identification;
