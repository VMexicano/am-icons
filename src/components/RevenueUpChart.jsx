import React from 'react';
import RevenueUpChart_ from './../Icons/revenueUpChart.svg';
const RevenueUpChart = (props) => {
  return (
    <img src={RevenueUpChart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RevenueUpChart;
