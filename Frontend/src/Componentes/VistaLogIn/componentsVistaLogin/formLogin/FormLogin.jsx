import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import './formLogin.css';

export const FormLogin = ( {onLogin} ) => {//este onlogin ni papi ricky lo entiende
    //Este useState es para ocultar este componente
    const [passwordHidden, setPasswordHidden] = useState(true);
    //Acá termina ocultarComponente----------------------------------------------
    //Estos son los useState para comunicar con el backend
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);//Se inicia en false ya que no estaremos logeados en un inicio
    //Acá termina----------------------------------------------

    const togglePasswordVisibility = () => {
        setPasswordHidden(!passwordHidden);
    }; 


    // Acá inicia el manejo del Login-----
    const handleLogin = async (event) => {
        event.preventDefault();//Para que no se reinicie el formulario
    
        console.log('Iniciando sesión con', email, password);
    
        try {//aca se envia una solicitud axios.post -- dado a que la ruta del login es un post
          const response = await axios.post('http://localhost:3000/api/v1/login', { email, password });
          console.log('respuesta del servidor:', response.data);
    
          const token = response.data.token;//almacenamos en la variable token la respuesta que nos de el endpoint
          Cookies.set('token', token);//se almacena token en token, dentro de una galletita
    
          setLoginSuccess(true);//acá se modifica el estado a TRUE 
          onLogin();//ACAAAAAAAAAAAAAAA ESTA EL ONLOGIN PA QUE NO SE NOS PIERDA DESPUES
    
          alert("Inicio de sesion correcto")
    
        } catch (error) {
          alert("Usuario o Contraseña incorrecta")
          console.error('Error en la solicitud:', error.response.data);
        }
      };
    
      if (loginSuccess) {
        return <Navigate to="/" />;//SI EL LOGINSUCCES ES TRUE, la wea nos va a direccionar ala ruta que le ongamos acá el HOME2.0 con la navbar modificada 
      }
      //Acá termina el manejo del login xd---
      //crucen los deditos cabres

    return (
        <form className="formLuis container">
            <section className="input-container col-12">
                <h2 className="titulo2Luis">Ingreso <span className='alumnosLuis'> Alumnos</span></h2>
            </section>
            <section className="input-container row contenedorLuisEspacio">
                <label htmlFor="username" className="label-textLuis" style={{ textAlign: 'left' }}>
                    Ingresa tu correo electrónico
                </label>
                <input
                    type="text"
                    id="username"
                    className="espacioLuis "
                    name="username"
                    placeholder="Ingresa tu correo acá."
                    required
                />
            </section>
            <section className="input-container row contenedorLuisEspacio">
                <label htmlFor="password" className="label-textLuis" >
                    Clave
                </label>
                <input
                    type={passwordHidden ? 'password' : 'text'}
                    id="password"
                    className="espacioLuis "                    
                    name="password"
                    placeholder="Ingresa tu clave acá."
                    required
                />
                <div className="password-toggleLuis" onClick={togglePasswordVisibility}></div>
            </section>
            <section>
                <p id="parrafoLuis">¿No te acuerdas de tu <span id="claveLuis">clave</span>?</p>
            </section>
            <section className='container row contenedorBotonLuis'>
                <button type="submit" className="botonLuis">
                    <span className='ingresarLuis'>Ingresar</span>
                </button>
                
            </section>
            <hr className='separadorLuis'/>
            <section>
                <h5 className='accesoDocenteLuis'> Acceso <span id="docenteLuis">docente</span> </h5>
            </section>
        </form>
    );
};
;
