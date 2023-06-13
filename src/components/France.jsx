import React from 'react';
import France_ from './../Icons/france.svg';
const France = (props) => {
  return (
    <img src={France_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default France;
