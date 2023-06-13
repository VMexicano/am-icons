import React from 'react';
import OutlineNotification_ from './../Icons/outlineNotification.svg';
const OutlineNotification = (props) => {
  return (
    <img src={OutlineNotification_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OutlineNotification;
