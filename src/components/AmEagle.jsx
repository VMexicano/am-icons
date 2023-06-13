import React from 'react';
import AmEagle_ from './../Icons/amEagle.svg';
const AmEagle = (props) => {
  return (
    <img src={AmEagle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AmEagle;
