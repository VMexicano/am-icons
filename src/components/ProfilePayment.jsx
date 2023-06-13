import React from 'react';
import ProfilePayment_ from './../Icons/profilePayment.svg';
const ProfilePayment = (props) => {
  return (
    <img src={ProfilePayment_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfilePayment;
