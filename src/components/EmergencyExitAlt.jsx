import React from 'react';
import EmergencyExitAlt_ from './../Icons/emergencyExitAlt.svg';
const EmergencyExitAlt = (props) => {
  return (
    <img src={EmergencyExitAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EmergencyExitAlt;
