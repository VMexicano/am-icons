import React from 'react';
import Star_ from './../Icons/star.svg';
const Star = (props) => {
  return (
    <img src={Star_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Star;
