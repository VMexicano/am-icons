import React from 'react';
import Golf_ from './../Icons/golf.svg';
const Golf = (props) => {
  return (
    <img src={Golf_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Golf;
