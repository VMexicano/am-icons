import React from 'react';
import Newspaper_ from './../Icons/newspaper.svg';
const Newspaper = (props) => {
  return (
    <img src={Newspaper_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Newspaper;
