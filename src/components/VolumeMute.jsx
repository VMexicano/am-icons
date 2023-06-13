import React from 'react';
import VolumeMute_ from './../Icons/volumeMute.svg';
const VolumeMute = (props) => {
  return (
    <img src={VolumeMute_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VolumeMute;
