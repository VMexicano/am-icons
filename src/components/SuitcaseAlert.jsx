import React from 'react';
import SuitcaseAlert_ from './../Icons/suitcaseAlert.svg';
const SuitcaseAlert = (props) => {
  return (
    <img src={SuitcaseAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SuitcaseAlert;
