import React from 'react';
import PhotoSolid_ from './../Icons/photoSolid.svg';
const PhotoSolid = (props) => {
  return (
    <img src={PhotoSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhotoSolid;
