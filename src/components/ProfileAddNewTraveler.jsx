import React from 'react';
import ProfileAddNewTraveler_ from './../Icons/profileAddNewTraveler.svg';
const ProfileAddNewTraveler = (props) => {
  return (
    <img src={ProfileAddNewTraveler_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfileAddNewTraveler;
