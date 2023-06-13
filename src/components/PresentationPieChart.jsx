import React from 'react';
import PresentationPieChart_ from './../Icons/presentationPieChart.svg';
const PresentationPieChart = (props) => {
  return (
    <img src={PresentationPieChart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PresentationPieChart;
