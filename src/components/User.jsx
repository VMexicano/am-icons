import React from 'react';
import User_ from './../Icons/user.svg';
const User = (props) => {
  return (
    <img src={User_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default User;
