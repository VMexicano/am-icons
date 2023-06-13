import React from 'react';
import Movies_ from './../Icons/movies.svg';
const Movies = (props) => {
  return (
    <img src={Movies_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Movies;
