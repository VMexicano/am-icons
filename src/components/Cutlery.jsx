import React from 'react';
import Cutlery_ from './../Icons/cutlery.svg';
const Cutlery = (props) => {
  return (
    <img src={Cutlery_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cutlery;
