import React from 'react';
import AddLine_ from './../Icons/addLine.svg';
const AddLine = (props) => {
  return (
    <img src={AddLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AddLine;
