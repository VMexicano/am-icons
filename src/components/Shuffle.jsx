import React from 'react';
import Shuffle_ from './../Icons/shuffle.svg';
const Shuffle = (props) => {
  return (
    <img src={Shuffle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Shuffle;
