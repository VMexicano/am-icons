import React from 'react';
import VolumeMiddle_ from './../Icons/volumeMiddle.svg';
const VolumeMiddle = (props) => {
  return (
    <img src={VolumeMiddle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VolumeMiddle;
