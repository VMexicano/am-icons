import React from 'react';
import Oil_ from './../Icons/oil.svg';
const Oil = (props) => {
  return (
    <img src={Oil_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Oil;
