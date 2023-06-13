import React from 'react';
import ErrorFareNotAvailable_ from './../Icons/errorFareNotAvailable.svg';
const ErrorFareNotAvailable = (props) => {
  return (
    <img src={ErrorFareNotAvailable_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ErrorFareNotAvailable;
