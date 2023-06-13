import React from 'react';
import UserDocument_ from './../Icons/userDocument.svg';
const UserDocument = (props) => {
  return (
    <img src={UserDocument_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserDocument;
