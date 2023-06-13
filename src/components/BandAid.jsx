import React from 'react';
import BandAid_ from './../Icons/bandAid.svg';
const BandAid = (props) => {
  return (
    <img src={BandAid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BandAid;
