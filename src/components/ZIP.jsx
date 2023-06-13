import React from 'react';
import ZIP_ from './../Icons/zIP.svg';
const ZIP = (props) => {
  return (
    <img src={ZIP_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ZIP;
