import React from 'react';
import Dog_ from './../Icons/dog.svg';
const Dog = (props) => {
  return (
    <img src={Dog_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Dog;
