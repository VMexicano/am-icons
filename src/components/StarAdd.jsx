import React from 'react';
import StarAdd_ from './../Icons/starAdd.svg';
const StarAdd = (props) => {
  return (
    <img src={StarAdd_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StarAdd;
