import React from 'react';
import SmartwatchHealth_ from './../Icons/smartwatchHealth.svg';
const SmartwatchHealth = (props) => {
  return (
    <img src={SmartwatchHealth_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartwatchHealth;
