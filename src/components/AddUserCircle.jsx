import React from 'react';
import AddUserCircle_ from './../Icons/addUserCircle.svg';
const AddUserCircle = (props) => {
  return (
    <img src={AddUserCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AddUserCircle;
