import React from 'react';
import Hydrant_ from './../Icons/hydrant.svg';
const Hydrant = (props) => {
  return (
    <img src={Hydrant_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Hydrant;
