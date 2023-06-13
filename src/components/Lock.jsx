import React from 'react';
import Lock_ from './../Icons/lock.svg';
const Lock = (props) => {
  return (
    <img src={Lock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lock;
