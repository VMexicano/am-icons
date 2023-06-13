import React from 'react';
import Edit_ from './../Icons/edit.svg';
const Edit = (props) => {
  return (
    <img src={Edit_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Edit;
