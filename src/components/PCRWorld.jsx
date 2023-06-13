import React from 'react';
import PCRWorld_ from './../Icons/pCRWorld.svg';
const PCRWorld = (props) => {
  return (
    <img src={PCRWorld_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PCRWorld;
