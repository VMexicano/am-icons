import React from 'react';
import HandWatchAlt_ from './../Icons/handWatchAlt.svg';
const HandWatchAlt = (props) => {
  return (
    <img src={HandWatchAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandWatchAlt;
