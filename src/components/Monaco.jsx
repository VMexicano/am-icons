import React from 'react';
import Monaco_ from './../Icons/monaco.svg';
const Monaco = (props) => {
  return (
    <img src={Monaco_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Monaco;
