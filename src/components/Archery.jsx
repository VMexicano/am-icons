import React from 'react';
import Archery_ from './../Icons/archery.svg';
const Archery = (props) => {
  return (
    <img src={Archery_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Archery;
