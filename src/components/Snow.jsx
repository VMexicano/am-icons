import React from 'react';
import Snow_ from './../Icons/snow.svg';
const Snow = (props) => {
  return (
    <img src={Snow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Snow;
