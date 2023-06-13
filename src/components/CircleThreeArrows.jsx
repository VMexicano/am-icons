import React from 'react';
import CircleThreeArrows_ from './../Icons/circleThreeArrows.svg';
const CircleThreeArrows = (props) => {
  return (
    <img src={CircleThreeArrows_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CircleThreeArrows;
