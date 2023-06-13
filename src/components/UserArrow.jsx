import React from 'react';
import UserArrow_ from './../Icons/userArrow.svg';
const UserArrow = (props) => {
  return (
    <img src={UserArrow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserArrow;
