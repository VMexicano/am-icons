import React from 'react';
import DogAlt_ from './../Icons/dogAlt.svg';
const DogAlt = (props) => {
  return (
    <img src={DogAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default DogAlt;
