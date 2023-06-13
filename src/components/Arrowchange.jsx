import React from 'react';
import Arrowchange_ from './../Icons/arrowchange.svg';
const Arrowchange = (props) => {
  return (
    <img src={Arrowchange_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Arrowchange;
