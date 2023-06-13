import React from 'react';
import Change_ from './../Icons/change.svg';
const Change = (props) => {
  return (
    <img src={Change_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Change;
