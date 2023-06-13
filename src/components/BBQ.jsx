import React from 'react';
import BBQ_ from './../Icons/bBQ.svg';
const BBQ = (props) => {
  return (
    <img src={BBQ_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default BBQ;
