import React from 'react';
import Panama_ from './../Icons/panama.svg';
const Panama = (props) => {
  return (
    <img src={Panama_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Panama;
