import React from 'react';
import LaptopDownload_ from './../Icons/laptopDownload.svg';
const LaptopDownload = (props) => {
  return (
    <img src={LaptopDownload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LaptopDownload;
