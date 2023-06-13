import React from 'react';
import ChartUp_ from './../Icons/chartUp.svg';
const ChartUp = (props) => {
  return (
    <img src={ChartUp_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChartUp;
