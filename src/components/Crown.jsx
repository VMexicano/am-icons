import React from 'react';
import Crown_ from './../Icons/crown.svg';
const Crown = (props) => {
  return (
    <img src={Crown_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Crown;
