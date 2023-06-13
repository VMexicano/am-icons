import React from 'react';
import RemoveUserCircle_ from './../Icons/removeUserCircle.svg';
const RemoveUserCircle = (props) => {
  return (
    <img src={RemoveUserCircle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RemoveUserCircle;
