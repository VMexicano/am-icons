import React from 'react';
import Russia_ from './../Icons/russia.svg';
const Russia = (props) => {
  return (
    <img src={Russia_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Russia;
