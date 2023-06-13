import React from 'react';
import RapaNui_ from './../Icons/rapaNui.svg';
const RapaNui = (props) => {
  return (
    <img src={RapaNui_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default RapaNui;
