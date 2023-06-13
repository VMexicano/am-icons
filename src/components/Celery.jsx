import React from 'react';
import Celery_ from './../Icons/celery.svg';
const Celery = (props) => {
  return (
    <img src={Celery_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Celery;
