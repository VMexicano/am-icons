import React from 'react';
import CropImage_ from './../Icons/cropImage.svg';
const CropImage = (props) => {
  return (
    <img src={CropImage_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CropImage;
