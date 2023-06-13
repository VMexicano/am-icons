import React from 'react';
import Trekking_ from './../Icons/trekking.svg';
const Trekking = (props) => {
  return (
    <img src={Trekking_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Trekking;
