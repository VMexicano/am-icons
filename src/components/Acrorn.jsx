import React from 'react';
import Acrorn_ from './../Icons/acrorn.svg';
const Acrorn = (props) => {
  return (
    <img src={Acrorn_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Acrorn;
