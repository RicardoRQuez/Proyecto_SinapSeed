import React, { useState, useEffect } from "react";
import { TarjetaNoticias } from "../TarjetaNoticias/TarjetaNoticias.jsx";
import styles from  "./MostradorDeNoticias.module.css";

export const MostradorDeNoticias = () => {
  const API_KEY = "pub_31964e2eff081d9bf1f753192009148f66f9f";
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(""); 

  const countryOptions = [
    { value: "", label: "Selecione un pais" },
    { value: "ar", label: "Argentina" },
    { value: "cl", label: "Chile" },
  ];

  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        if (selectedCountry) {
        const response = await fetch(
          `https://newsdata.io/api/1/news?country=${selectedCountry}&category=technology&apikey=${API_KEY}`
        );
        const data = await response.json();

        if (data && data.results) {
          setNoticias(data.results);
          setLoading(false);
        } else {
          console.error(
            "La respuesta de la API no contiene una lista de noticias válidas"
          );
        }
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

  const selectedCountryLabel = 
    selectedCountry !== ("")
    ? countryOptions.find(
    (option) => option.value === selectedCountry)?.label
    :"";

  return (
    <div>
      <h1 className="tituloMostrador">
        Noticias de Tecnología en {selectedCountryLabel}
      </h1>
      <select value={selectedCountry} onChange={handleCountryChange}>
        {countryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedCountry ? ( // Verifica si se ha seleccionado un país
        loading ? (
          <p className={styles.parrafo}>Cargando noticias...</p>
        ) : noticias && noticias.length > 0 ? (
          <div className="contenedorBuscador">
            {noticias.map((noticia, index) => (
              <TarjetaNoticias
                key={noticia.article_id}
                titulo={noticia.title}
                subtitulo={
                  noticia.creator ? noticia.creator.join(", ") : "Autor anónimo"
                }
                descripcion={noticia.description}
                enlace={noticia.link}
                imagen={
                  noticia.imagen_url ? noticia.imagen_url.join(", ") : "Sin imagen"
                }
              />
            ))}
          </div>
        ) : (
          <p className={styles.parrafo}>No hay noticias disponibles para este país.</p>
        )
      ) : (
        <p className={styles.parrafo}>Por favor, selecciona un país para ver las noticias.</p>
      )}
    </div>
  );
};
