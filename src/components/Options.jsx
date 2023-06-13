import React from 'react';
import Options_ from './../Icons/options.svg';
const Options = (props) => {
  return (
    <img src={Options_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Options;
