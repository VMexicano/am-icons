import React from 'react';
import Leafs_ from './../Icons/leafs.svg';
const Leafs = (props) => {
  return (
    <img src={Leafs_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Leafs;
