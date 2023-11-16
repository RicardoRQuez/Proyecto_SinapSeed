import React, { useState } from 'react';

export const AgregarCurso = () => {
    const navigate = useNavigate();
    const [curso, setCurso] = useState({
      titulo: "",
      descripcion: "",
      resumen: "",
      imagen: "",
      precio: "",
      puntaje: "",
    });

  // Función para manejar cambios en el formulario
  const handleChange = (e) => {
    setNuevoCurso({
      ...nuevoCurso,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar la subida del formulario
  const handleGuardar = async () => {
    // Realiza la lógica para guardar el nuevo curso en la base de datos
    // Puedes usar fetch o alguna librería para hacer la solicitud al servidor
    // ...

    // Después de guardar, redirige a la página de cargar cursos o realiza alguna acción
    // history.push('/cargar-cursos');
  };  
  

  return (
    <>
      <div>
        <div className="container-flex antiNavbar">.</div>
        <h2 className="tirarAbajo">Agregar Curso</h2>

        <form>



        <section className="row alMedio">
        <img src={imagenPerfilSrc} alt="imagendePerfil" className="imagenPerfil" />
        </section>
        <section className="row alMedio">
        <div className="input-group">
          <label className="input-group-text">
            Subir
          </label>

          
          <input
            type="file"
            className="form-control"
            id="inputGroupFile01"
            name="titulo"
            value={curso.imagen}
            imagen={bufferToDataURL(curso.imagen, 'image/jpeg')}
            onChange={handleFileChange}
          />
        </div>
        </section>
      
          <div className="container alMedio">
            <div className="row alMedio ">
              <div className="col-3 izquierda">
                <label>titulo:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="titulo"
                  value={curso.titulo}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Descripción:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="descripcion"
                  value={curso.descripcion}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Resumen:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="resumen"
                  value={curso.resumen}
                  onChange={handleChange}
                />
              </div>
            </div>
       
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Puntaje:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="puntaje"
                  value={curso.puntaje}
                  onChange={handleChange}
                />
              </div>
            </div>
               <div className="row alMedio">
              <div className="col-3 izquierda">
                <label>Precio:</label>
              </div>
              <div className="col-3 izquierda">
                <input
                  type="text"
                  name="precio"
                  value={curso.precio}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="row alMedio">
              <div className="col-3 izquierda">
                <label></label>
              </div>
              <div className="col-3 izquierda">
                <button type="button" onClick={handleGuardar }>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

