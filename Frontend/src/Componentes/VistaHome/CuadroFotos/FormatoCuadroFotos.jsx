import React from 'react';
import './FormatoCuadroFotos.css';

export const FormatoCuadro = ({imagenes, numeros, textos}) => {


  return (
    <> 

<img className='fotografia img-fluid' src={imagenes} alt="" />
<strong>{numeros}</strong>
<div>{textos}</div>



</>
  );
};