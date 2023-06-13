import React from 'react';
import MovieClapperboard_ from './../Icons/movieClapperboard.svg';
const MovieClapperboard = (props) => {
  return (
    <img src={MovieClapperboard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MovieClapperboard;
