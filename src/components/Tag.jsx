import React from 'react';
import Tag_ from './../Icons/tag.svg';
const Tag = (props) => {
  return (
    <img src={Tag_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tag;
