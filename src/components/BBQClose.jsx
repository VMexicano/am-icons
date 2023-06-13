import React from 'react';
import BBQClose_ from './../Icons/bBQClose.svg';
const BBQClose = (props) => {
  return (
    <img src={BBQClose_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BBQClose;
