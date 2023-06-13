import React from 'react';
import Reembolso_ from './../Icons/reembolso.svg';
const Reembolso = (props) => {
  return (
    <img src={Reembolso_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Reembolso;
