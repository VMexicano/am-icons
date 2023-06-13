import React from 'react';
import Tornado_ from './../Icons/tornado.svg';
const Tornado = (props) => {
  return (
    <img src={Tornado_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tornado;
