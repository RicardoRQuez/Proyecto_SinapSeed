import React from 'react';
import './VistaForo.css';
import Image from 'react-bootstrap/Image';

function FluidExample() {
  return <Image src="../../assets/resources/jovenes_estudiando.jpg" fluid />;
}


export const VistaForo = () => {
  return (
    <div>
      
    <FluidExample/>
    
    
    </div>
  )
}
