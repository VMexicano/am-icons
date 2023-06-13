import React from 'react';
import Mongolia_ from './../Icons/mongolia.svg';
const Mongolia = (props) => {
  return (
    <img src={Mongolia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Mongolia;
