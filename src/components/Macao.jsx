import React from 'react';
import Macao_ from './../Icons/macao.svg';
const Macao = (props) => {
  return (
    <img src={Macao_} alt={props.alt || ''} {...props} >
    </img>
  );
};
export default Macao;
