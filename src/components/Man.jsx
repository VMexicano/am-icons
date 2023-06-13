import React from 'react';
import Man_ from './../Icons/man.svg';
const Man = (props) => {
  return (
    <img src={Man_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Man;
