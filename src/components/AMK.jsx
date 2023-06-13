import React from 'react';
import AMK_ from './../Icons/aMK.svg';
const AMK = (props) => {
  return (
    <img src={AMK_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AMK;
