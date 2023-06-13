import React from 'react';
import Chat2_ from './../Icons/chat2.svg';
const Chat2 = (props) => {
  return (
    <img src={Chat2_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chat2;
