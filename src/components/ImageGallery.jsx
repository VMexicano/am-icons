import React from 'react';
import ImageGallery_ from './../Icons/imageGallery.svg';
const ImageGallery = (props) => {
  return (
    <img src={ImageGallery_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ImageGallery;
