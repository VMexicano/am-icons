import React from 'react';
import ReloadLine_ from './../Icons/reloadLine.svg';
const ReloadLine = (props) => {
  return (
    <img src={ReloadLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ReloadLine;
