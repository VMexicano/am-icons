import React from 'react';
import Chile_ from './../Icons/chile.svg';
const Chile = (props) => {
  return (
    <img src={Chile_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chile;
