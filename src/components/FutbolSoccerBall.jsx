import React from 'react';
import FutbolSoccerBall_ from './../Icons/futbolSoccerBall.svg';
const FutbolSoccerBall = (props) => {
  return (
    <img src={FutbolSoccerBall_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default FutbolSoccerBall;
