import React from 'react';
import Funnel_ from './../Icons/funnel.svg';
const Funnel = (props) => {
  return (
    <img src={Funnel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Funnel;
