import React from 'react';
import BirthdayCake_ from './../Icons/birthdayCake.svg';
const BirthdayCake = (props) => {
  return (
    <img src={BirthdayCake_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BirthdayCake;
