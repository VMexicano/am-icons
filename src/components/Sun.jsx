import React from 'react';
import Sun_ from './../Icons/sun.svg';
const Sun = (props) => {
  return (
    <img src={Sun_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Sun;
