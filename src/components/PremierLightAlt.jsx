import React from 'react';
import PremierLightAlt_ from './../Icons/premierLightAlt.svg';
const PremierLightAlt = (props) => {
  return (
    <img src={PremierLightAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PremierLightAlt;
