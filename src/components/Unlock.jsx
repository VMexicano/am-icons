import React from 'react';
import Unlock_ from './../Icons/unlock.svg';
const Unlock = (props) => {
  return (
    <img src={Unlock_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Unlock;
