import React from 'react';
import NoSomking_ from './../Icons/noSomking.svg';
const NoSomking = (props) => {
  return (
    <img src={NoSomking_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NoSomking;
