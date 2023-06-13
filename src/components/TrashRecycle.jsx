import React from 'react';
import TrashRecycle_ from './../Icons/trashRecycle.svg';
const TrashRecycle = (props) => {
  return (
    <img src={TrashRecycle_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default TrashRecycle;
