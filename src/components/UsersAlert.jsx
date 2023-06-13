import React from 'react';
import UsersAlert_ from './../Icons/usersAlert.svg';
const UsersAlert = (props) => {
  return (
    <img src={UsersAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UsersAlert;
