import React from 'react';
import MovieTicket_ from './../Icons/movieTicket.svg';
const MovieTicket = (props) => {
  return (
    <img src={MovieTicket_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default MovieTicket;
