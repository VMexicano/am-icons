import React from 'react';
import Photos_ from './../Icons/photos.svg';
const Photos = (props) => {
  return (
    <img src={Photos_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Photos;
