import React from 'react';
import MicrophoneAlt_ from './../Icons/microphoneAlt.svg';
const MicrophoneAlt = (props) => {
  return (
    <img src={MicrophoneAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MicrophoneAlt;
