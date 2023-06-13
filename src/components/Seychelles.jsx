import React from 'react';
import Seychelles_ from './../Icons/seychelles.svg';
const Seychelles = (props) => {
  return (
    <img src={Seychelles_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Seychelles;
