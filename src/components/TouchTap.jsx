import React from 'react';
import TouchTap_ from './../Icons/touchTap.svg';
const TouchTap = (props) => {
  return (
    <img src={TouchTap_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchTap;
