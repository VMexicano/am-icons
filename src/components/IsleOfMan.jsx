import React from 'react';
import IsleOfMan_ from './../Icons/isleOfMan.svg';
const IsleOfMan = (props) => {
  return (
    <img src={IsleOfMan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default IsleOfMan;
