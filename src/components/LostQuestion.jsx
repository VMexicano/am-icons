import React from 'react';
import LostQuestion_ from './../Icons/lostQuestion.svg';
const LostQuestion = (props) => {
  return (
    <img src={LostQuestion_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LostQuestion;
