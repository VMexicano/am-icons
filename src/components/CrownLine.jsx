import React from 'react';
import CrownLine_ from './../Icons/crownLine.svg';
const CrownLine = (props) => {
  return (
    <img src={CrownLine_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CrownLine;
