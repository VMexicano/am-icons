import React from 'react';
import PlaneCenitalView_ from './../Icons/planeCenitalView.svg';
const PlaneCenitalView = (props) => {
  return (
    <img src={PlaneCenitalView_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneCenitalView;
