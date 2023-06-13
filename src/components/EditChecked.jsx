import React from 'react';
import EditChecked_ from './../Icons/editChecked.svg';
const EditChecked = (props) => {
  return (
    <img src={EditChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EditChecked;
