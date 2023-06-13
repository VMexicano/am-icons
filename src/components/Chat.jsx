import React from 'react';
import Chat_ from './../Icons/chat.svg';
const Chat = (props) => {
  return (
    <img src={Chat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Chat;
