import React from 'react';
import EggsAndBacon_ from './../Icons/eggsAndBacon.svg';
const EggsAndBacon = (props) => {
  return (
    <img src={EggsAndBacon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EggsAndBacon;
