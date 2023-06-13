import React from 'react';
import AirplaneWindow_ from './../Icons/airplaneWindow.svg';
const AirplaneWindow = (props) => {
  return (
    <img src={AirplaneWindow_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AirplaneWindow;
