import React from 'react';
import Wales_ from './../Icons/wales.svg';
const Wales = (props) => {
  return (
    <img src={Wales_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Wales;
