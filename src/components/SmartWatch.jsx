import React from 'react';
import SmartWatch_ from './../Icons/smartWatch.svg';
const SmartWatch = (props) => {
  return (
    <img src={SmartWatch_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SmartWatch;
