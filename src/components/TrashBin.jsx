import React from 'react';
import TrashBin_ from './../Icons/trashBin.svg';
const TrashBin = (props) => {
  return (
    <img src={TrashBin_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TrashBin;
