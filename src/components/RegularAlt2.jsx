import React from 'react';
import RegularAlt2_ from './../Icons/regularAlt2.svg';
const RegularAlt2 = (props) => {
  return (
    <img src={RegularAlt2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RegularAlt2;
