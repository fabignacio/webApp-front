# WebApp Front

La aplicación web permite a los usuarios cargar incidentes con los datos necesarios y generar un informe en formato PDF.

## Tecnologías Utilizadas

- **Bootstrap:** Utilizado para el diseño, garantizando que la interfaz sea receptiva sin necesidad de realizar muchos ajustes.
- **React:** Empleado en la creación de los componentes de la interfaz de usuario.
- **JavaScript:** Lenguaje principal de programación utilizado en el proyecto.

## Antes de Empezar

### Requisitos Previos

Asegúrate de tener Node.js instalado en tu máquina antes de comenzar. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).

### Clonar el Repositorio

Utiliza el siguiente comando para clonar el repositorio en tu máquina local:

    git clone https://github.com/fabignacio/webApp-front.git

# Instalación de dependencias

Una vez clonado el repositorio, abriendo la terminal (ya sea de Visual Studio Code, PowerShell(Windows) o Terminal (MAC)), deberá de ejecutar el siguiente comando para hacer las instalaciones de las dependencias del proyecto:

    npm install

# Consideraciones

Si al levantar el backend, la siguiente ruta sufre algún cambio respecto al puerto:

    'https://localhost:7280/api'

Deberá de cambiar el archivo variables.js, el cual se encuentra en src/variables/variables.js. Solo deberá copiar y pegar la ruta que el navegador donde se abre el backend en donde dice:

    export const BACKEND_URL_API = {nueva ruta en caso de ser necesario}

Al levantar el backend, este por defecto, abrirá una pestaña nueva en el navegador (seguramente sea una ventana nueva). Esa es la ruta que deberá copiar y pegar en caso de que sea necesario.

# Ejecutar proyecto

Una vez terminado el paso anterior, solamente deberá ejecutar el siguiente comando:

    npm run start

Con ese comando se deberá levantar la página en una dirección localhost.
