import React from 'react';
import Tibet_ from './../Icons/tibet.svg';
const Tibet = (props) => {
  return (
    <img src={Tibet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Tibet;
