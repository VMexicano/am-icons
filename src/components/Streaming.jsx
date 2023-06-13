import React from 'react';
import Streaming_ from './../Icons/streaming.svg';
const Streaming = (props) => {
  return (
    <img src={Streaming_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Streaming;
