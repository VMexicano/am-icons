import React from 'react';
import HandPhone_ from './../Icons/handPhone.svg';
const HandPhone = (props) => {
  return (
    <img src={HandPhone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default HandPhone;
