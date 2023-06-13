import React from 'react';
import Guam_ from './../Icons/guam.svg';
const Guam = (props) => {
  return (
    <img src={Guam_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Guam;
