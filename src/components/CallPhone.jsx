import React from 'react';
import CallPhone_ from './../Icons/callPhone.svg';
const CallPhone = (props) => {
  return (
    <img src={CallPhone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CallPhone;
