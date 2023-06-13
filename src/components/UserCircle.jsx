import React from 'react';
import UserCircle_ from './../Icons/userCircle.svg';
const UserCircle = (props) => {
  return (
    <img src={UserCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserCircle;
