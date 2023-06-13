import React from 'react';
import SriLanka_ from './../Icons/sriLanka.svg';
const SriLanka = (props) => {
  return (
    <img src={SriLanka_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SriLanka;
