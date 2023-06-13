import React from 'react';
import HandWatch_ from './../Icons/handWatch.svg';
const HandWatch = (props) => {
  return (
    <img src={HandWatch_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandWatch;
