import React from 'react';
import InfoPAX_ from './../Icons/infoPAX.svg';
const InfoPAX = (props) => {
  return (
    <img src={InfoPAX_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default InfoPAX;
