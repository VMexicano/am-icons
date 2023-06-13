import React from 'react';
import Belgium_ from './../Icons/belgium.svg';
const Belgium = (props) => {
  return (
    <img src={Belgium_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Belgium;
