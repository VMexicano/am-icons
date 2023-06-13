import React from 'react';
import PictogramPriority_ from './../Icons/pictogramPriority.svg';
const PictogramPriority = (props) => {
  return (
    <img src={PictogramPriority_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramPriority;
