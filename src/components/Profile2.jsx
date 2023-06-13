import React from 'react';
import Profile2_ from './../Icons/profile2.svg';
const Profile2 = (props) => {
  return (
    <img src={Profile2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Profile2;
