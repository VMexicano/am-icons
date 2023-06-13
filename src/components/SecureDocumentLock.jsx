import React from 'react';
import SecureDocumentLock_ from './../Icons/secureDocumentLock.svg';
const SecureDocumentLock = (props) => {
  return (
    <img src={SecureDocumentLock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SecureDocumentLock;
