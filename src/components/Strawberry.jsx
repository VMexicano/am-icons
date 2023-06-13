import React from 'react';
import Strawberry_ from './../Icons/strawberry.svg';
const Strawberry = (props) => {
  return (
    <img src={Strawberry_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Strawberry;
