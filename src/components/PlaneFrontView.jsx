import React from 'react';
import PlaneFrontView_ from './../Icons/planeFrontView.svg';
const PlaneFrontView = (props) => {
  return (
    <img src={PlaneFrontView_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneFrontView;
