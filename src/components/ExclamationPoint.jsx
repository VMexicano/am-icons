import React from 'react';
import ExclamationPoint_ from './../Icons/exclamationPoint.svg';
const ExclamationPoint = (props) => {
  return (
    <img src={ExclamationPoint_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ExclamationPoint;
