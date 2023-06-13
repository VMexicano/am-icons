import React from 'react';
import ThumbUp_ from './../Icons/thumbUp.svg';
const ThumbUp = (props) => {
  return (
    <img src={ThumbUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ThumbUp;
