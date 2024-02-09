# SinapSeed

SinapSeed es un proyecto que ofrece una interfaz de usuario dinámica para usuarios registrados. Facilita el acceso a diversos cursos y fomenta la interacción entre los usuarios a través de un foro.

 ## Estructura del Proyecto

El proyecto se divide en dos Carpetas principales:

 Frontend (React 18.2.0)

La carpeta "frontend" contiene el código fuente para la interfaz de usuario construida con React.


 Backend (Node.js 4.18.2)

La carpeta "backend" alberga el código fuente del servidor construido con Node.js. 



 ## Configuración y Uso

 ### Frontend
  Navega a la carpeta "frontend":
    cd Frontend
   Instala las dependencias:
   npm install
   Inicia la aplicación:
   npm run dev

 ### Backend
   Antes de iniciar el backend, asegúrate de configurar las variables de entorno. Crea un archivo ".env" en la carpeta "backend" y añade las siguientes variables:

  # Configuración de la base de datos MongoDB con Mongoose
CONEXION_DB=URL_DE_CONEXION_A_LA_BASE_DE_DATOS

# Puerto en el que se ejecutará el servidor
PORT=3000

# Frase secreta para la generación de tokens JWT
SECRETPHRASE=UNA_FRASE_SECRETA_PARA_JWT
   
   Navega a la carpeta "backend":
    cd Backend
   Instala las dependencias:
   npm install
   Inicia la aplicación:
   npm run dev
