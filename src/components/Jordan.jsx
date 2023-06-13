import React from 'react';
import Jordan_ from './../Icons/jordan.svg';
const Jordan = (props) => {
  return (
    <img src={Jordan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Jordan;
