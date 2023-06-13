import React from 'react';
import LeafAlt1_ from './../Icons/leafAlt1.svg';
const LeafAlt1 = (props) => {
  return (
    <img src={LeafAlt1_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LeafAlt1;
