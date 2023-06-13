import React from 'react';
import Clouds_ from './../Icons/clouds.svg';
const Clouds = (props) => {
  return (
    <img src={Clouds_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Clouds;
