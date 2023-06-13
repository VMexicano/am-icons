import React from 'react';
import PresentationBarUp_ from './../Icons/presentationBarUp.svg';
const PresentationBarUp = (props) => {
  return (
    <img src={PresentationBarUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PresentationBarUp;
