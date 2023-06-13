import React from 'react';
import PresentationLines_ from './../Icons/presentationLines.svg';
const PresentationLines = (props) => {
  return (
    <img src={PresentationLines_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PresentationLines;
