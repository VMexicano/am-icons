import React from 'react';
import Morocco_ from './../Icons/morocco.svg';
const Morocco = (props) => {
  return (
    <img src={Morocco_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Morocco;
