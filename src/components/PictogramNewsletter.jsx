import React from 'react';
import PictogramNewsletter_ from './../Icons/pictogramNewsletter.svg';
const PictogramNewsletter = (props) => {
  return (
    <img src={PictogramNewsletter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramNewsletter;
