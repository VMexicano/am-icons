import React from 'react';
import Vietnam_ from './../Icons/vietnam.svg';
const Vietnam = (props) => {
  return (
    <img src={Vietnam_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Vietnam;
