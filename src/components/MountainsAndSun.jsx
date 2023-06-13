import React from 'react';
import MountainsAndSun_ from './../Icons/mountainsAndSun.svg';
const MountainsAndSun = (props) => {
  return (
    <img src={MountainsAndSun_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MountainsAndSun;
