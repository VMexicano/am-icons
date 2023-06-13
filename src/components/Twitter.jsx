import React from 'react';
import Twitter_ from './../Icons/twitter.svg';
const Twitter = (props) => {
  return (
    <img src={Twitter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Twitter;
