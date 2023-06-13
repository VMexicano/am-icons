import React from 'react';
import Argentina_ from './../Icons/argentina.svg';
const Argentina = (props) => {
  return (
    <img src={Argentina_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Argentina;
