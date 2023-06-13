import React from 'react';
import LetterHeart_ from './../Icons/letterHeart.svg';
const LetterHeart = (props) => {
  return (
    <img src={LetterHeart_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default LetterHeart;
