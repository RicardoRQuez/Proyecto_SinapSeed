import React, { useState, useEffect } from 'react';
import { TarjetaNoticias } from '../TarjetaNoticias/TarjetaNoticias.jsx';
import './MostradorDeNoticias.css'

export const MostradorDeNoticias = () => {
  const API_KEY = "pub_31964e2eff081d9bf1f753192009148f66f9f";
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("cl"); // Valor predeterminado: Argentina

  const countryOptions = [
    { value: "ar", label: "Argentina" },
    { value: "cl", label: "Chile" },
  ];

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?country=${selectedCountry}&category=technology&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data && data.results) {
          setNoticias(data.results);
          setLoading(false);
        } else {
          console.error("La respuesta de la API no contiene una lista de noticias válidas");
        }
      } catch (error) {
        console.error("Ha ocurrido un error:", error);
      }
    };

    obtenerNoticias();
  }, [selectedCountry]);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const selectedCountryLabel = countryOptions.find((option) => option.value === selectedCountry)?.label;

  return (
    <div>
      <h1 className='sekso'>Noticias de Tecnología en {selectedCountryLabel}</h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {loading ? (
        <p>Cargando noticias...</p>
      ) : (
        <div>
          {noticias.map((noticia, index) => (
            <TarjetaNoticias
              key={noticia.article_id}
              titulo={noticia.title}
              subtitulo={noticia.creator ? noticia.creator.join(', ') : 'Autor anonimo'}
              descripcion={noticia.description}
              enlace={noticia.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};
 