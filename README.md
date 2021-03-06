#  Base de Datos I - Venta de artículos de pesca.
# PROYECTO FINAL
### INTRODUCCIÓN
Nuestro proyecto final es una **Página de Venta de Articulos de Pesca** que fue diseñada con el objetivo de consolidar los conceptos reacionados con el curso **Base de Datos**.  Somos un grupo conformado por cuatro estudiantes de la carrera profesional de Ciencias de la Computación.
La **Página de Ventas** fue creada con el objetivo de simular el funcionamiento de una página de ventas, que contempla las siguientes tareas:
- Manejo de Sesiones
- Modelado de Squemas en una base de datos
- Transacciones
- Análisis de Minimundo y planteamiento lógico.
- Manejo de colecciones
- Filtrado y ordenamiento de datos 

#### ESTRUCTURA DEL PROYECTO
El proyecto se desarrolló principalmente en tres ambitos, backend, base de datos y frontend. Nuestro backend está basado en NodeJS y se encuentra desplegado en un servicio gratiuto, en este caso se trata de Heroku, el backend contempla todas las llamadas a la API que se pueden realizar desde el frontend asi como la información referente a la conección a la base de datos, y la creación de los modelos referentes a cada uno de nuestros Squemas (user, sales, product, categories).
La base de datos que estamos utilizando en este caso es una base de datos no relacional, se encuentra desplegada en un servicio gratuito, en este caso se trata del servicio gratuito de mongodb, Mongo ATLAS. Es esta la base de datos a la cual se conecta nuestra API a realizar las consultas por medio del backend por medio de la dependencia mongoose. El frontend llama a las funciones definidas en los controllers de cada model del backend y son estas funciones las que llaman a las consultas a la base de datos.
El frontend se encuentra desarrollado en ReactJS
#### REACTJS
ReactJS está orientado al desarrollo del cliente, por lo que no es un Framework al uso como pueden ser AngularJS o Knockout, que son un ¨todo incluido¨.
ReactJS se centra en el desarrollo de la Vista. Por esto, es muy común verlo relacionado con otras librerías formando tándem para cumplimentar el desarrollo del resto de la aplicación, como en nuestro caso ReactJS + NodeJS.
###### - Declarativo
React hace que sea sencillo crear interfaces de usuario interactivas. Diseñe vistas simples para cada estado en su aplicación, y React actualizará y renderizará de manera eficiente los componentes correctos cuando cambien sus datos.
###### - Basado en Componentes
Cree componentes encapsulados que gestionen su propio estado y luego compóngalos para crear interfaces de usuario complejas.
Dado que la lógica de los componentes está escrita en JavaScript en lugar de en plantillas, puede pasar fácilmente datos enriquecidos a través de su aplicación y mantener el estado fuera del DOM. 
###### Dependencias Frontend
| Dependencia  | Versión  | Utilidad |
| :--------------- |:---------------:| :-----:|
|   `bootstrap`    | 5.0.1 | Diseño |
|`dotenv`    |    9.0.2    | Variables de Entorno  |
| `reactstrap` | 1.1.2     |   Diseño  |
| `react-router-dom` |  5.2.0     |  Enrutamiento  |
| `web-vitals`  |  8.9.0    | Experiencia Usuario |

#### NODEJS
Node.js es un entorno de ejecución de JavaScript, una plataforma para ejecutar códigos JavaScript en el lado del servidor y hacerlo portátil. En términos sencillos, un entorno de ejecución es donde los desarrolladores ejecutan un programa. Node.js ofrece comodidad para los desarrolladores y además posee muchas herramientas que facilitan el desarrollo a las cuales llamaremos Dependencias y son nombradas a continuación. 
###### Dependencias Backend
| Dependencia  | Versión  | Utilidad |
| :--------------- |:---------------:| :-----:|
|   `body-parser`    | 1.19.0 | Compatibilidad |
|`cors`    |    2.8.5    |  Compatibilidad  |
| `dotenv` |  9.0.2      |  Variables de Entorno |
| `express` |  4.17.1      |  Servidor  |
| `formidable`  |  1.2.2    |  Tratamiento de Datos  |
| `jsonwebtoken` |    8.5.1    |  Seguridad |
| `mongoose` |   5.12.9     |  Base de Datos  |
| `morgan` |   1.10.0     |  Desarrollo |
| `nodemon` |   2.0.7     |  Desarrollo  |
| `uuid` |    3.4.0    |  Seguridad  |
