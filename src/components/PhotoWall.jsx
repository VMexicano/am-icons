import React from 'react';
import PhotoWall_ from './../Icons/photoWall.svg';
const PhotoWall = (props) => {
  return (
    <img src={PhotoWall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhotoWall;
