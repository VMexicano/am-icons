import React from 'react';
import Checked_ from './../Icons/checked.svg';
const Checked = (props) => {
  return (
    <img src={Checked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Checked;
