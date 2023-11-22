import React from 'react';
import './CuadroDatos.css';

export const CuadroDatos = ({imagenes, numeros, textos}) => {


  return (
    <> 

<img className='iconito' src={imagenes} alt="" />
<strong>{numeros}</strong>
<div>{textos}</div>



</>
  );
};
