import React from 'react';
import UserWithTie_ from './../Icons/userWithTie.svg';
const UserWithTie = (props) => {
  return (
    <img src={UserWithTie_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserWithTie;
