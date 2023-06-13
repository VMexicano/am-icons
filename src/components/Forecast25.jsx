import React from 'react';
import Forecast25_ from './../Icons/forecast25.svg';
const Forecast25 = (props) => {
  return (
    <img src={Forecast25_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Forecast25;
