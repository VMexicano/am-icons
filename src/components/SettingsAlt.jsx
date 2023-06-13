import React from 'react';
import SettingsAlt_ from './../Icons/settingsAlt.svg';
const SettingsAlt = (props) => {
  return (
    <img src={SettingsAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SettingsAlt;
