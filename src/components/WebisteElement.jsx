import React from 'react';
import WebisteElement_ from './../Icons/webisteElement.svg';
const WebisteElement = (props) => {
  return (
    <img src={WebisteElement_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WebisteElement;
