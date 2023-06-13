import React from 'react';
import CallCenterMan_ from './../Icons/callCenterMan.svg';
const CallCenterMan = (props) => {
  return (
    <img src={CallCenterMan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CallCenterMan;
