import React from 'react';
import XThin_ from './../Icons/xThin.svg';
const XThin = (props) => {
  return (
    <img src={XThin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default XThin;
