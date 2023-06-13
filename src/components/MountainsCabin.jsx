import React from 'react';
import MountainsCabin_ from './../Icons/mountainsCabin.svg';
const MountainsCabin = (props) => {
  return (
    <img src={MountainsCabin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MountainsCabin;
