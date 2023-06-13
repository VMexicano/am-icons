import React from 'react';
import Idea_ from './../Icons/idea.svg';
const Idea = (props) => {
  return (
    <img src={Idea_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Idea;
