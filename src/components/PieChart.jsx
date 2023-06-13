import React from 'react';
import PieChart_ from './../Icons/pieChart.svg';
const PieChart = (props) => {
  return (
    <img src={PieChart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PieChart;
