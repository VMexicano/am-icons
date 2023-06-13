import React from 'react';
import Image_ from './../Icons/image.svg';
const Image = (props) => {
  return (
    <img src={Image_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Image;
