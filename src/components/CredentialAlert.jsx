import React from 'react';
import CredentialAlert_ from './../Icons/credentialAlert.svg';
const CredentialAlert = (props) => {
  return (
    <img src={CredentialAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CredentialAlert;
