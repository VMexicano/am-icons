import React from 'react';
import MedicKit_ from './../Icons/medicKit.svg';
const MedicKit = (props) => {
  return (
    <img src={MedicKit_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MedicKit;
