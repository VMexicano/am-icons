import React from 'react';
import Extras_ from './../Icons/extras.svg';
const Extras = (props) => {
  return (
    <img src={Extras_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Extras;
