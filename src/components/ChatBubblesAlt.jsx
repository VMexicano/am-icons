import React from 'react';
import ChatBubblesAlt_ from './../Icons/chatBubblesAlt.svg';
const ChatBubblesAlt = (props) => {
  return (
    <img src={ChatBubblesAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatBubblesAlt;
