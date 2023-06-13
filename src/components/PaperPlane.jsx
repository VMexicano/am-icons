import React from 'react';
import PaperPlane_ from './../Icons/paperPlane.svg';
const PaperPlane = (props) => {
  return (
    <img src={PaperPlane_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaperPlane;
