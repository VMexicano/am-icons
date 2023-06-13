import React from 'react';
import Facebook_ from './../Icons/facebook.svg';
const Facebook = (props) => {
  return (
    <img src={Facebook_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Facebook;
