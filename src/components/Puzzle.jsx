import React from 'react';
import Puzzle_ from './../Icons/puzzle.svg';
const Puzzle = (props) => {
  return (
    <img src={Puzzle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Puzzle;
