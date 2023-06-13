import React from 'react';
import Wine_ from './../Icons/wine.svg';
const Wine = (props) => {
  return (
    <img src={Wine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Wine;
