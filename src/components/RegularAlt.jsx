import React from 'react';
import RegularAlt_ from './../Icons/regularAlt.svg';
const RegularAlt = (props) => {
  return (
    <img src={RegularAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RegularAlt;
