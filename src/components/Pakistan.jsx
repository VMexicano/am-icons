import React from 'react';
import Pakistan_ from './../Icons/pakistan.svg';
const Pakistan = (props) => {
  return (
    <img src={Pakistan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Pakistan;
