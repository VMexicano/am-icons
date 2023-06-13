import React from 'react';
import VanWithAirplane_ from './../Icons/vanWithAirplane.svg';
const VanWithAirplane = (props) => {
  return (
    <img src={VanWithAirplane_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default VanWithAirplane;
