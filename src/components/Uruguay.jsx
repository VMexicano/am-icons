import React from 'react';
import Uruguay_ from './../Icons/uruguay.svg';
const Uruguay = (props) => {
  return (
    <img src={Uruguay_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Uruguay;
