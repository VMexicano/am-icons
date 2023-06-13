import React from 'react';
import Visa_ from './../Icons/visa.svg';
const Visa = (props) => {
  return (
    <img src={Visa_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Visa;
