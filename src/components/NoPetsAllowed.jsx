import React from 'react';
import NoPetsAllowed_ from './../Icons/noPetsAllowed.svg';
const NoPetsAllowed = (props) => {
  return (
    <img src={NoPetsAllowed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NoPetsAllowed;
