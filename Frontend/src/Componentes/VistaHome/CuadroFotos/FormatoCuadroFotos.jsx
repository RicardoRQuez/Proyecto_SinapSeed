import React from 'react';
import './FormatoCuadroFotos.css';

export const FormatoCuadro = ({imagenes, numeros, textos}) => {


  return (
    <> 

<img className='fotografia' src={imagenes} alt="" />
<strong>{numeros}</strong>
<div>{textos}</div>



</>
  );
};
