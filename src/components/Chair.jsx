import React from 'react';
import Chair_ from './../Icons/chair.svg';
const Chair = (props) => {
  return (
    <img src={Chair_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chair;
