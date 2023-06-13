import React from 'react';
import Vanuatu_ from './../Icons/vanuatu.svg';
const Vanuatu = (props) => {
  return (
    <img src={Vanuatu_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Vanuatu;
