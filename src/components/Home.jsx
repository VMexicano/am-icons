import React from 'react';
import Home_ from './../Icons/home.svg';
const Home = (props) => {
  return (
    <img src={Home_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Home;
