import React from 'react';
import Lebanon_ from './../Icons/lebanon.svg';
const Lebanon = (props) => {
  return (
    <img src={Lebanon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lebanon;
