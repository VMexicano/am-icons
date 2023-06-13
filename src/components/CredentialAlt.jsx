import React from 'react';
import CredentialAlt_ from './../Icons/credentialAlt.svg';
const CredentialAlt = (props) => {
  return (
    <img src={CredentialAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CredentialAlt;
