import { useState } from "react";
import './BuscadorDeNoticias.css'

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
    <div className="container">
      <h1 className="title">Buscador de Noticias</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese una palabra para buscar noticias"
          value={busqueda}
          onChange={handleInputChange}
        />

        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>

      <div className="movie-list">
        {noticias.map((noticia, index) => (
          <div key={index} className="news-card">
            <img src={noticia.urlToImage} alt={noticia.title} />
            <h2>{noticia.title}</h2>
            <h5>{noticia.publishedAt}</h5>
            <p>{noticia.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
