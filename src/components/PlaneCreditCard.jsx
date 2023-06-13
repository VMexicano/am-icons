import React from 'react';
import PlaneCreditCard_ from './../Icons/planeCreditCard.svg';
const PlaneCreditCard = (props) => {
  return (
    <img src={PlaneCreditCard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlaneCreditCard;
