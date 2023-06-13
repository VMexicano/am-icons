import React from 'react';
import StarChecked_ from './../Icons/starChecked.svg';
const StarChecked = (props) => {
  return (
    <img src={StarChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StarChecked;
