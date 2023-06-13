import React from 'react';
import Radioactive_ from './../Icons/radioactive.svg';
const Radioactive = (props) => {
  return (
    <img src={Radioactive_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Radioactive;
