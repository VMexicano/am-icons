import React from 'react';
import Ukraine_ from './../Icons/ukraine.svg';
const Ukraine = (props) => {
  return (
    <img src={Ukraine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Ukraine;
