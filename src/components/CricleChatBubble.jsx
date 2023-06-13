import React from 'react';
import CricleChatBubble_ from './../Icons/cricleChatBubble.svg';
const CricleChatBubble = (props) => {
  return (
    <img src={CricleChatBubble_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default CricleChatBubble;
