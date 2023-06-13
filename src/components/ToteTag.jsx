import React from 'react';
import ToteTag_ from './../Icons/toteTag.svg';
const ToteTag = (props) => {
  return (
    <img src={ToteTag_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ToteTag;
