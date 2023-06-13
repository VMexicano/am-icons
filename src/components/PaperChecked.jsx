import React from 'react';
import PaperChecked_ from './../Icons/paperChecked.svg';
const PaperChecked = (props) => {
  return (
    <img src={PaperChecked_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PaperChecked;
