import React from 'react';
import MoreExpanded_ from './../Icons/moreExpanded.svg';
const MoreExpanded = (props) => {
  return (
    <img src={MoreExpanded_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MoreExpanded;
