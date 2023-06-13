import React from 'react';
import Instagram_ from './../Icons/instagram.svg';
const Instagram = (props) => {
  return (
    <img src={Instagram_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Instagram;
