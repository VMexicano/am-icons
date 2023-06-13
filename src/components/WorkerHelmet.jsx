import React from 'react';
import WorkerHelmet_ from './../Icons/workerHelmet.svg';
const WorkerHelmet = (props) => {
  return (
    <img src={WorkerHelmet_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default WorkerHelmet;
