import React from 'react';
import BoardingPass_ from './../Icons/boardingPass.svg';
const BoardingPass = (props) => {
  return (
    <img src={BoardingPass_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BoardingPass;
