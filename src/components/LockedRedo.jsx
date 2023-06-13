import React from 'react';
import LockedRedo_ from './../Icons/lockedRedo.svg';
const LockedRedo = (props) => {
  return (
    <img src={LockedRedo_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LockedRedo;
