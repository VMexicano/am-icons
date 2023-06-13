import React from 'react';
import ProfileCheck_ from './../Icons/profileCheck.svg';
const ProfileCheck = (props) => {
  return (
    <img src={ProfileCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfileCheck;
