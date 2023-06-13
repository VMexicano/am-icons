import React from 'react';
import EmailBoardingPass_ from './../Icons/emailBoardingPass.svg';
const EmailBoardingPass = (props) => {
  return (
    <img src={EmailBoardingPass_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EmailBoardingPass;
