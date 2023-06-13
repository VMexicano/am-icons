import React from 'react';
import Lightbulb_ from './../Icons/lightbulb.svg';
const Lightbulb = (props) => {
  return (
    <img src={Lightbulb_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lightbulb;
