import React from 'react';
import Stadium_ from './../Icons/stadium.svg';
const Stadium = (props) => {
  return (
    <img src={Stadium_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Stadium;
