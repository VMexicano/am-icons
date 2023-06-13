import React from 'react';
import AlignText_ from './../Icons/alignText.svg';
const AlignText = (props) => {
  return (
    <img src={AlignText_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AlignText;
