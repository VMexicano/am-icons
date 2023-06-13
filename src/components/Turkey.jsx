import React from 'react';
import Turkey_ from './../Icons/turkey.svg';
const Turkey = (props) => {
  return (
    <img src={Turkey_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Turkey;
