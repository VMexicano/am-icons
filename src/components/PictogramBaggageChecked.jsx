import React from 'react';
import PictogramBaggageChecked_ from './../Icons/pictogramBaggageChecked.svg';
const PictogramBaggageChecked = (props) => {
  return (
    <img src={PictogramBaggageChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramBaggageChecked;
