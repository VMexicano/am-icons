import React from 'react';
import RemoveUser_ from './../Icons/removeUser.svg';
const RemoveUser = (props) => {
  return (
    <img src={RemoveUser_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RemoveUser;
