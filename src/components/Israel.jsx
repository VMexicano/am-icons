import React from 'react';
import Israel_ from './../Icons/israel.svg';
const Israel = (props) => {
  return (
    <img src={Israel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Israel;
