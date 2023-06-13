import React from 'react';
import NoWheat_ from './../Icons/noWheat.svg';
const NoWheat = (props) => {
  return (
    <img src={NoWheat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default NoWheat;
