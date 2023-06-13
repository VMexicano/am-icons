import React from 'react';
import Presentation_ from './../Icons/presentation.svg';
const Presentation = (props) => {
  return (
    <img src={Presentation_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Presentation;
