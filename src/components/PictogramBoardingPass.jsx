import React from 'react';
import PictogramBoardingPass_ from './../Icons/pictogramBoardingPass.svg';
const PictogramBoardingPass = (props) => {
  return (
    <img src={PictogramBoardingPass_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PictogramBoardingPass;
