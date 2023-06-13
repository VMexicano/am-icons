import React from 'react';
import Plus_ from './../Icons/plus.svg';
const Plus = (props) => {
  return (
    <img src={Plus_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Plus;
