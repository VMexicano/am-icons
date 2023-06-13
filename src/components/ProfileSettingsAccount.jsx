import React from 'react';
import ProfileSettingsAccount_ from './../Icons/profileSettingsAccount.svg';
const ProfileSettingsAccount = (props) => {
  return (
    <img src={ProfileSettingsAccount_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ProfileSettingsAccount;
