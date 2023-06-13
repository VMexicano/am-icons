import React from 'react';
import Iceland_ from './../Icons/iceland.svg';
const Iceland = (props) => {
  return (
    <img src={Iceland_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Iceland;
