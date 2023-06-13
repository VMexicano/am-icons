import React from 'react';
import Water_ from './../Icons/water.svg';
const Water = (props) => {
  return (
    <img src={Water_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Water;
