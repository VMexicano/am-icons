import React from 'react';
import Regular_ from './../Icons/regular.svg';
const Regular = (props) => {
  return (
    <img src={Regular_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Regular;
