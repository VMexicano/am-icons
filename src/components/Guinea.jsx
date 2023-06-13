import React from 'react';
import Guinea_ from './../Icons/guinea.svg';
const Guinea = (props) => {
  return (
    <img src={Guinea_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Guinea;
