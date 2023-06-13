import React from 'react';
import HeartAdd_ from './../Icons/heartAdd.svg';
const HeartAdd = (props) => {
  return (
    <img src={HeartAdd_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HeartAdd;
