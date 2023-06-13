import React from 'react';
import CorrosiveChemical_ from './../Icons/corrosiveChemical.svg';
const CorrosiveChemical = (props) => {
  return (
    <img src={CorrosiveChemical_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CorrosiveChemical;
