import React from 'react';
import PhotoID_ from './../Icons/photoID.svg';
const PhotoID = (props) => {
  return (
    <img src={PhotoID_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PhotoID;
