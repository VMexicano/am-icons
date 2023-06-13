import React from 'react';
import Snorkel_ from './../Icons/snorkel.svg';
const Snorkel = (props) => {
  return (
    <img src={Snorkel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Snorkel;
