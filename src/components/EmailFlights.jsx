import React from 'react';
import EmailFlights_ from './../Icons/emailFlights.svg';
const EmailFlights = (props) => {
  return (
    <img src={EmailFlights_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default EmailFlights;
