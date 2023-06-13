import React from 'react';
import Cameroon_ from './../Icons/cameroon.svg';
const Cameroon = (props) => {
  return (
    <img src={Cameroon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Cameroon;
