import React from 'react';
import Phonecall_ from './../Icons/phonecall.svg';
const Phonecall = (props) => {
  return (
    <img src={Phonecall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Phonecall;
