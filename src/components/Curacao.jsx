import React from 'react';
import Curacao_ from './../Icons/curacao.svg';
const Curacao = (props) => {
  return (
    <img src={Curacao_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Curacao;
