import React from 'react';
import SmartwatchRun_ from './../Icons/smartwatchRun.svg';
const SmartwatchRun = (props) => {
  return (
    <img src={SmartwatchRun_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartwatchRun;
