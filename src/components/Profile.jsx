import React from 'react';
import Profile_ from './../Icons/profile.svg';
const Profile = (props) => {
  return (
    <img src={Profile_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Profile;
