import React from 'react';
import Croatia_ from './../Icons/croatia.svg';
const Croatia = (props) => {
  return (
    <img src={Croatia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Croatia;
