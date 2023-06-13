import React from 'react';
import BarChart_ from './../Icons/barChart.svg';
const BarChart = (props) => {
  return (
    <img src={BarChart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BarChart;
