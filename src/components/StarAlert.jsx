import React from 'react';
import StarAlert_ from './../Icons/starAlert.svg';
const StarAlert = (props) => {
  return (
    <img src={StarAlert_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default StarAlert;
