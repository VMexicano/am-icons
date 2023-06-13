import React from 'react';
import ChatWritingDots_ from './../Icons/chatWritingDots.svg';
const ChatWritingDots = (props) => {
  return (
    <img src={ChatWritingDots_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default ChatWritingDots;
