import React from 'react';
import Police_ from './../Icons/police.svg';
const Police = (props) => {
  return (
    <img src={Police_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Police;
