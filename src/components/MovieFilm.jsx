import React from 'react';
import MovieFilm_ from './../Icons/movieFilm.svg';
const MovieFilm = (props) => {
  return (
    <img src={MovieFilm_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MovieFilm;
