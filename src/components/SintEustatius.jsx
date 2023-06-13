import React from 'react';
import SintEustatius_ from './../Icons/sintEustatius.svg';
const SintEustatius = (props) => {
  return (
    <img src={SintEustatius_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SintEustatius;
