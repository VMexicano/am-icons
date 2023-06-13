import React from 'react';
import WebsiteAlt_ from './../Icons/websiteAlt.svg';
const WebsiteAlt = (props) => {
  return (
    <img src={WebsiteAlt_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WebsiteAlt;
