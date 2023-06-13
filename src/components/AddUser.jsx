import React from 'react';
import AddUser_ from './../Icons/addUser.svg';
const AddUser = (props) => {
  return (
    <img src={AddUser_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AddUser;
