import React from 'react';
import SierraLeone_ from './../Icons/sierraLeone.svg';
const SierraLeone = (props) => {
  return (
    <img src={SierraLeone_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SierraLeone;
