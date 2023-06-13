import React from 'react';
import VolumeFull_ from './../Icons/volumeFull.svg';
const VolumeFull = (props) => {
  return (
    <img src={VolumeFull_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VolumeFull;
