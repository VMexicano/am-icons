import React from 'react';
import MedicKitAlt_ from './../Icons/medicKitAlt.svg';
const MedicKitAlt = (props) => {
  return (
    <img src={MedicKitAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MedicKitAlt;
