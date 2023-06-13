import React from 'react';
import ProfileBenefits_ from './../Icons/profileBenefits.svg';
const ProfileBenefits = (props) => {
  return (
    <img src={ProfileBenefits_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfileBenefits;
