import React from 'react';
import LaptopChart_ from './../Icons/laptopChart.svg';
const LaptopChart = (props) => {
  return (
    <img src={LaptopChart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LaptopChart;
