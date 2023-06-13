import React from 'react';
import Settings_ from './../Icons/settings.svg';
const Settings = (props) => {
  return (
    <img src={Settings_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Settings;
