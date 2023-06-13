import React from 'react';
import CrownSolid_ from './../Icons/crownSolid.svg';
const CrownSolid = (props) => {
  return (
    <img src={CrownSolid_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CrownSolid;
