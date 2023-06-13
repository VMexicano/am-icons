import React from 'react';
import UserDocumentAlt_ from './../Icons/userDocumentAlt.svg';
const UserDocumentAlt = (props) => {
  return (
    <img src={UserDocumentAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UserDocumentAlt;
