import React from 'react';
import AncillaryConcierge_ from './../Icons/ancillaryConcierge.svg';
const AncillaryConcierge = (props) => {
  return (
    <img src={AncillaryConcierge_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default AncillaryConcierge;
