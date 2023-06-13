import React from 'react';
import SrufBoard_ from './../Icons/srufBoard.svg';
const SrufBoard = (props) => {
  return (
    <img src={SrufBoard_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default SrufBoard;
