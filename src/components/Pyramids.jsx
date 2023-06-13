import React from 'react';
import Pyramids_ from './../Icons/pyramids.svg';
const Pyramids = (props) => {
  return (
    <img src={Pyramids_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pyramids;
