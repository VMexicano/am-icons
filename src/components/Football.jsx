import React from 'react';
import Football_ from './../Icons/football.svg';
const Football = (props) => {
  return (
    <img src={Football_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Football;
