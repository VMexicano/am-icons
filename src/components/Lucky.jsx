import React from 'react';
import Lucky_ from './../Icons/lucky.svg';
const Lucky = (props) => {
  return (
    <img src={Lucky_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Lucky;
