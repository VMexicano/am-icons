import React from 'react';
import Reload_ from './../Icons/reload.svg';
const Reload = (props) => {
  return (
    <img src={Reload_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Reload;
