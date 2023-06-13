import React from 'react';
import Postal_ from './../Icons/postal.svg';
const Postal = (props) => {
  return (
    <img src={Postal_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Postal;
