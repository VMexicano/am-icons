import React from 'react';
import LeafAlt_ from './../Icons/leafAlt.svg';
const LeafAlt = (props) => {
  return (
    <img src={LeafAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafAlt;
