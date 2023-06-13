import React from 'react';
import ExitAlt_ from './../Icons/exitAlt.svg';
const ExitAlt = (props) => {
  return (
    <img src={ExitAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ExitAlt;
