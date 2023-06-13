import React from 'react';
import Volume_ from './../Icons/volume.svg';
const Volume = (props) => {
  return (
    <img src={Volume_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Volume;
