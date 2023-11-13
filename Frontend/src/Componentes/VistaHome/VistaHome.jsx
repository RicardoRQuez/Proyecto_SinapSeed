import React from 'react';
import {Banner} from './Banner/Banner.jsx'
import {Botones} from './BotonesMenu/BotonesMenu.jsx'
import {BotonesTres} from './BotonesTres/BotonesTres.jsx'
import {Calendario} from './Calendario/Calendario.jsx'
import {Beneficios} from './CuadroBeneficios/BeneficiosContainer.jsx'
import {EquipoSinapSeed} from './CuadroFotos/CuadroFotasas.jsx'
import './VistaHome.css'

export const VistaHome = () => {
  return (
 <>
    <Banner/>
    <Botones/>
    <BotonesTres/>
    <Calendario/>
    <Beneficios/>
    <EquipoSinapSeed/>



    </>
  )
}
