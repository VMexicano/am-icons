import React from 'react';
import OrkneyIslands_ from './../Icons/orkneyIslands.svg';
const OrkneyIslands = (props) => {
  return (
    <img src={OrkneyIslands_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OrkneyIslands;
