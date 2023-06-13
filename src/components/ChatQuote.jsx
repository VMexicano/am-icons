import React from 'react';
import ChatQuote_ from './../Icons/chatQuote.svg';
const ChatQuote = (props) => {
  return (
    <img src={ChatQuote_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatQuote;
