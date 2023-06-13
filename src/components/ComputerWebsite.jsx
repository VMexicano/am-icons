import React from 'react';
import ComputerWebsite_ from './../Icons/computerWebsite.svg';
const ComputerWebsite = (props) => {
  return (
    <img src={ComputerWebsite_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ComputerWebsite;
