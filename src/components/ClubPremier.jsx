import React from 'react';
import ClubPremier_ from './../Icons/clubPremier.svg';
const ClubPremier = (props) => {
  return (
    <img src={ClubPremier_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ClubPremier;
