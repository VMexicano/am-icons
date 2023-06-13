import React from 'react';
import Taiwan_ from './../Icons/taiwan.svg';
const Taiwan = (props) => {
  return (
    <img src={Taiwan_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Taiwan;
