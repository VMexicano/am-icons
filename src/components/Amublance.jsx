import React from 'react';
import Amublance_ from './../Icons/amublance.svg';
const Amublance = (props) => {
  return (
    <img src={Amublance_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Amublance;
