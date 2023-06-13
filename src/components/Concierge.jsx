import React from 'react';
import Concierge_ from './../Icons/concierge.svg';
const Concierge = (props) => {
  return (
    <img src={Concierge_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Concierge;
