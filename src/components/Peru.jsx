import React from 'react';
import Peru_ from './../Icons/peru.svg';
const Peru = (props) => {
  return (
    <img src={Peru_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Peru;
