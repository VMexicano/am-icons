import React from 'react';
import Baseball_ from './../Icons/baseball.svg';
const Baseball = (props) => {
  return (
    <img src={Baseball_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Baseball;
