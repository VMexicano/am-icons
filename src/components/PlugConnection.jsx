import React from 'react';
import PlugConnection_ from './../Icons/plugConnection.svg';
const PlugConnection = (props) => {
  return (
    <img src={PlugConnection_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default PlugConnection;
