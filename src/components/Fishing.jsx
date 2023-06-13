import React from 'react';
import Fishing_ from './../Icons/fishing.svg';
const Fishing = (props) => {
  return (
    <img src={Fishing_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Fishing;
