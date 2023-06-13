import React from 'react';
import Travelers_ from './../Icons/travelers.svg';
const Travelers = (props) => {
  return (
    <img src={Travelers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Travelers;
