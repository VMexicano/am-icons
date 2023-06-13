import React from 'react';
import TouchTapped_ from './../Icons/touchTapped.svg';
const TouchTapped = (props) => {
  return (
    <img src={TouchTapped_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TouchTapped;
