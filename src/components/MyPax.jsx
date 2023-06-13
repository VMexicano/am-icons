import React from 'react';
import MyPax_ from './../Icons/myPax.svg';
const MyPax = (props) => {
  return (
    <img src={MyPax_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MyPax;
