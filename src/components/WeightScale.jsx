import React from 'react';
import WeightScale_ from './../Icons/weightScale.svg';
const WeightScale = (props) => {
  return (
    <img src={WeightScale_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WeightScale;
