import React from 'react';
import ThumbsUpAltLike_ from './../Icons/thumbsUpAltLike.svg';
const ThumbsUpAltLike = (props) => {
  return (
    <img src={ThumbsUpAltLike_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ThumbsUpAltLike;
