import React from 'react';
import PaperAndPen_ from './../Icons/paperAndPen.svg';
const PaperAndPen = (props) => {
  return (
    <img src={PaperAndPen_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaperAndPen;
