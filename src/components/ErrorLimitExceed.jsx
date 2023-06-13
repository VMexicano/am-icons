import React from 'react';
import ErrorLimitExceed_ from './../Icons/errorLimitExceed.svg';
const ErrorLimitExceed = (props) => {
  return (
    <img src={ErrorLimitExceed_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ErrorLimitExceed;
