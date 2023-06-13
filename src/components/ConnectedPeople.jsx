import React from 'react';
import ConnectedPeople_ from './../Icons/connectedPeople.svg';
const ConnectedPeople = (props) => {
  return (
    <img src={ConnectedPeople_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ConnectedPeople;
