import React from 'react';
import Scotland_ from './../Icons/scotland.svg';
const Scotland = (props) => {
  return (
    <img src={Scotland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Scotland;
