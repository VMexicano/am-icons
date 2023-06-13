import React from 'react';
import Compress_ from './../Icons/compress.svg';
const Compress = (props) => {
  return (
    <img src={Compress_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Compress;
