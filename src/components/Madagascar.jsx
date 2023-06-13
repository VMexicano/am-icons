import React from 'react';
import Madagascar_ from './../Icons/madagascar.svg';
const Madagascar = (props) => {
  return (
    <img src={Madagascar_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Madagascar;
