import React from 'react';
import Salvador_ from './../Icons/salvador.svg';
const Salvador = (props) => {
  return (
    <img src={Salvador_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Salvador;
