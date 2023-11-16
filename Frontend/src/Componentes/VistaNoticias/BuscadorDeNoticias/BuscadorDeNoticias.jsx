import { useState } from "react";
import { TarjetaNoticias } from "../TarjetaNoticias/TarjetaNoticias";
import styles from "./BuscadorDeNoticias.module.css";

export const BuscadorDeNoticias = () => {
  const API_KEY = "247f7e19cca24b6daaabf2b3e383a65e";
  const [busqueda, setBusqueda] = useState("");
  const [noticias, setNoticias] = useState([]);

  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNoticias();
  };
  const fetchNoticias = async () => {
    
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${busqueda}&from=2023-10-26&to=2023-10-26&sortBy=popularity&apiKey=${API_KEY}`
      );
      const data = await response.json();

      console.log("data");

      if (data.articles) {
        setNoticias(data.articles);
      } else {
        console.error(
          "La respuesta de la API no contiene una lista de noticias validas"
        );
      }
    } catch (error) {
      console.error("Ha ocurrido un error:", error);
    }
  };

  return (
    <div className={`${styles.contenedor} container`}>
      <h1 className="titleBuscador">Buscador de Noticias Internacionales</h1>

      <form className={styles.formularioBuscador} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una palabra para buscar noticias"
          value={busqueda}
          onChange={handleInputChange}
          className={styles.inputBuscador}
        />

        <button type="submit" className={styles.color}>
          Buscar
        </button>
      </form>

      <div className="news-list">
        {noticias.map((noticia, index) => (
          <TarjetaNoticias
            key={index}
            titulo={noticia.title}
            subtitulo={noticia.publishedAt}
            descripcion={noticia.description}
            enlace={noticia.url}
            imagen={noticia.urlToImage}
          />
        ))}
      </div>
    </div>
  );
};
