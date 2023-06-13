import React from 'react';
import SintMaarten_ from './../Icons/sintMaarten.svg';
const SintMaarten = (props) => {
  return (
    <img src={SintMaarten_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SintMaarten;
