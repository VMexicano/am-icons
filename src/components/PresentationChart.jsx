import React from 'react';
import PresentationChart_ from './../Icons/presentationChart.svg';
const PresentationChart = (props) => {
  return (
    <img src={PresentationChart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PresentationChart;
