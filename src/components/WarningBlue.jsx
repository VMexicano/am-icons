import React from 'react';
import WarningBlue_ from './../Icons/warningBlue.svg';
const WarningBlue = (props) => {
  return (
    <img src={WarningBlue_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WarningBlue;
