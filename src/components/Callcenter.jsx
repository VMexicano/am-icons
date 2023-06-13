import React from 'react';
import Callcenter_ from './../Icons/callcenter.svg';
const Callcenter = (props) => {
  return (
    <img src={Callcenter_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Callcenter;
