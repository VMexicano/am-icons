import React from 'react';
import ThumbsDownAlt_ from './../Icons/thumbsDownAlt.svg';
const ThumbsDownAlt = (props) => {
  return (
    <img src={ThumbsDownAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ThumbsDownAlt;
