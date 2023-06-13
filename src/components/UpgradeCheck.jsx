import React from 'react';
import UpgradeCheck_ from './../Icons/upgradeCheck.svg';
const UpgradeCheck = (props) => {
  return (
    <img src={UpgradeCheck_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default UpgradeCheck;
