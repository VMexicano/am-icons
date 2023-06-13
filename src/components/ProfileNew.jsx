import React from 'react';
import ProfileNew_ from './../Icons/profileNew.svg';
const ProfileNew = (props) => {
  return (
    <img src={ProfileNew_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfileNew;
