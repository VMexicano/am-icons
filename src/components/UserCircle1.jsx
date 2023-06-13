import React from 'react';
import UserCircle1_ from './../Icons/userCircle1.svg';
const UserCircle1 = (props) => {
  return (
    <img src={UserCircle1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserCircle1;
