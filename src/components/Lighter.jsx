import React from 'react';
import Lighter_ from './../Icons/lighter.svg';
const Lighter = (props) => {
  return (
    <img src={Lighter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lighter;
