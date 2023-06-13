import React from 'react';
import UserCircleCrossed_ from './../Icons/userCircleCrossed.svg';
const UserCircleCrossed = (props) => {
  return (
    <img src={UserCircleCrossed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserCircleCrossed;
