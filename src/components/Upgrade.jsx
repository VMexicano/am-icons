import React from 'react';
import Upgrade_ from './../Icons/upgrade.svg';
const Upgrade = (props) => {
  return (
    <img src={Upgrade_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Upgrade;
