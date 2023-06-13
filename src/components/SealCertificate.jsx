import React from 'react';
import SealCertificate_ from './../Icons/sealCertificate.svg';
const SealCertificate = (props) => {
  return (
    <img src={SealCertificate_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SealCertificate;
