import React from 'react';
import SuitcaseDetailed_ from './../Icons/suitcaseDetailed.svg';
const SuitcaseDetailed = (props) => {
  return (
    <img src={SuitcaseDetailed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SuitcaseDetailed;
