import React from 'react';
import AmbulanceAlt_ from './../Icons/ambulanceAlt.svg';
const AmbulanceAlt = (props) => {
  return (
    <img src={AmbulanceAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmbulanceAlt;
