import React from 'react';
import Germany_ from './../Icons/germany.svg';
const Germany = (props) => {
  return (
    <img src={Germany_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Germany;
