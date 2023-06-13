import React from 'react';
import ComputerSettings_ from './../Icons/computerSettings.svg';
const ComputerSettings = (props) => {
  return (
    <img src={ComputerSettings_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerSettings;
