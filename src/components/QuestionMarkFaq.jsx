import React from 'react';
import QuestionMarkFaq_ from './../Icons/questionMarkFaq.svg';
const QuestionMarkFaq = (props) => {
  return (
    <img src={QuestionMarkFaq_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default QuestionMarkFaq;
