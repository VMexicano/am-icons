import React from 'react';
import Credential_ from './../Icons/credential.svg';
const Credential = (props) => {
  return (
    <img src={Credential_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Credential;
