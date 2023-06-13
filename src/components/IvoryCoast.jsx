import React from 'react';
import IvoryCoast_ from './../Icons/ivoryCoast.svg';
const IvoryCoast = (props) => {
  return (
    <img src={IvoryCoast_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default IvoryCoast;
