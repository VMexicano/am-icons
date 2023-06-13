import React from 'react';
import PlaneStraight_ from './../Icons/planeStraight.svg';
const PlaneStraight = (props) => {
  return (
    <img src={PlaneStraight_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneStraight;
