import React from 'react';
import Micronesia_ from './../Icons/micronesia.svg';
const Micronesia = (props) => {
  return (
    <img src={Micronesia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Micronesia;
