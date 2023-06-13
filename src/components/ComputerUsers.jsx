import React from 'react';
import ComputerUsers_ from './../Icons/computerUsers.svg';
const ComputerUsers = (props) => {
  return (
    <img src={ComputerUsers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerUsers;
