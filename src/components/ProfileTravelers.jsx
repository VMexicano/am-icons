import React from 'react';
import ProfileTravelers_ from './../Icons/profileTravelers.svg';
const ProfileTravelers = (props) => {
  return (
    <img src={ProfileTravelers_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfileTravelers;
