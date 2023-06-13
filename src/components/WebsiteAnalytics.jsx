import React from 'react';
import WebsiteAnalytics_ from './../Icons/websiteAnalytics.svg';
const WebsiteAnalytics = (props) => {
  return (
    <img src={WebsiteAnalytics_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WebsiteAnalytics;
