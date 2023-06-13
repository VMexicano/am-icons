import React from 'react';
import OrganicPeroxides_ from './../Icons/organicPeroxides.svg';
const OrganicPeroxides = (props) => {
  return (
    <img src={OrganicPeroxides_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default OrganicPeroxides;
