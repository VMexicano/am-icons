import React from 'react';
import MovieReel_ from './../Icons/movieReel.svg';
const MovieReel = (props) => {
  return (
    <img src={MovieReel_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MovieReel;
