import React from 'react';
import CounterChat_ from './../Icons/counterChat.svg';
const CounterChat = (props) => {
  return (
    <img src={CounterChat_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CounterChat;
