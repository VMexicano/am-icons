import React from 'react';
import FishBone_ from './../Icons/fishBone.svg';
const FishBone = (props) => {
  return (
    <img src={FishBone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FishBone;
