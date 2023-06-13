import React from 'react';
import Arrowicon_ from './../Icons/arrowicon.svg';
const Arrowicon = (props) => {
  return (
    <img src={Arrowicon_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Arrowicon;
