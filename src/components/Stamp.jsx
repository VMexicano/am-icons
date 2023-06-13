import React from 'react';
import Stamp_ from './../Icons/stamp.svg';
const Stamp = (props) => {
  return (
    <img src={Stamp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Stamp;
