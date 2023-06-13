import React from 'react';
import Solidcard_ from './../Icons/solidcard.svg';
const Solidcard = (props) => {
  return (
    <img src={Solidcard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Solidcard;
