import React from 'react';
import Cuba_ from './../Icons/cuba.svg';
const Cuba = (props) => {
  return (
    <img src={Cuba_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cuba;
