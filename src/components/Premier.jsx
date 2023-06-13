import React from 'react';
import Premier_ from './../Icons/premier.svg';
const Premier = (props) => {
  return (
    <img src={Premier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Premier;
