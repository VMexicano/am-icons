import React from 'react';
import CrownAlt_ from './../Icons/crownAlt.svg';
const CrownAlt = (props) => {
  return (
    <img src={CrownAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CrownAlt;
