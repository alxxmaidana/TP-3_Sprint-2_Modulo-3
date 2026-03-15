# Sprint 2 Práctico 3 Final

## Estructura del proyecto:

```
README.md
src/
	app.mjs
	package.json
	config/
		dbConfig.mjs
	controllers/
		supeheroController.mjs
	models/
		superhero.mjs
	repositories/
		IRepository.mjs
		SuperheroRepository.mjs
	routes/
		superheroRoutes.mjs
	services/
		superheroService.mjs
	views/
		responseView.mjs
```

---

## Configuración de la Conexión a la base de datos MongoDB:

**Archivo:** `src/config/dbConfig.mjs`

**Funcionalidad:** Este archivo configura la conexión centralizada a MongoDB, permitiendo que la aplicación
tenga una *única instancia de conexión que puede ser utilizada en cualquier parte del proyecto*.

**Teoría:** Centralizar la configuración de conexión a MongoDB en dbConfig.mjs permite
tener un único punto de configuración. Esto facilita el mantenimiento y asegura que cualquier cambio en la
configuración se realice en un solo lugar, mejorando la modularidad y la reusabilidad del código.

---

## Modelo de datos:

**Archivo: `src/models/superhero.mjs`**

**Funcionalidad:** Define el modelo de datos para superheroes utilizando Mongoose, estableciendo la
estructura y las reglas de validacion para los documentos que seran almacenados en MongoDB.

**Justificación teórica:** Definir el modelo de datos asegura que cada documento en la colección de
superhéroes siga una estructura consistente, lo que permite tener un control de calidad sobre los datos.
Mongoose facilita la validación y la gestión de los datos, garantizando que cada documento cumpla con los
requisitos del esquema, como la obligatoriedad de ciertos campos y los tipos de datos.

---

## Capa de persistencia y su interfaz

**Archivo de interfaz `src/repositories/IRepository.mjs`** 

**Funcionalidad:** Establece una interfaz que define métodos CRUD estándar y sirve como
contrato para asegurar que cualquier clase que implemente la interfaz cuente con estos métodos.

**Justificacion teorica:** La interfaz IRepository.mjs proporciona una abstraccion de los metodos CRUD
que deben ser implementados por cualquier repositorio. Esto asegura que todas las clases de repositorio
mantengan consistencia en sus metodos, mejorando la mantenibilidad y facilitando cambios futuros en la
implementación.

**Archivo de implementación `src/repositories/SuperheroRepository.mjs`**

**Justificación teórica:** SuperHeroRepository.mjs implementa los métodos definidos en la interfaz,
interactuando directamente con MongoDB a través de Mongoose para realizar operaciones de datos. La
centralización de estas operaciones en el repositorio mejora la organización y garantiza que el acceso a los
datos se realice de manera controlada y uniforme.

---

## Capa de servicio

**Archivo: `src/services/superheroService.mjs`**

**Funcionalidad:** Este archivo implementa la lógica de negocio, utilizando los métodos del repositorio para
recuperar, buscar y filtrar datos de los superhéroes.

**Justificación teórica:** La capa de servicios contiene la lógica de negocio y se encarga de validar y
transformar los datos cuando es necesario. Esto permite mantener el repositorio enfocado únicamente en
el acceso a la base de datos, facilitando la separación de responsabilidades y asegurando que la lógica de
negocio se encuentre en un solo lugar.

---

## Controlador

**Funcionalidad:** Este archivo implementa el controlador para gestionar las solicitudes HTTP, llamando a los
servicios correspondientes y utilizando las vistas para presentar los datos.

**Justificación teórica:** La capa de controladores gestiona las solicitudes del cliente y llama a la capa de
servicios para realizar las operaciones necesarias. Al usar funciones específicas para cada endpoint, el
controlador actúa como intermediario, facilitando la separación de responsabilidades y mejorando la
organización del código.

---

## Configuración de la capa de vista

**Archivo: `src/views/responseView.mjs`**

**Funcionalidad**: Este archivo define las funciones de presentación de los datos, organizando la información
de los superhéroes en un formato estructurado.

**Justificacion teorica:** La capa de vistas organiza la presentacion de los datos, facilitando la lectura y el
acceso a la información en un formato estándar para el cliente. Esto mejora la separación de
responsabilidades y permite mantener la lógica de presentación en un único lugar.

---

## Configuración de Rutas

**Archivo: `src/routes/superheroRoutes.mjs`**

**Funcionalidad: Este archivo defina las rutas necesarias para cada operación del controlador.

Justificación teórica: La capa de rutas define los endpoints y mapea cada uno a su respectivo controlador,
permitiendo que las solicitudes HTTP se manejen de forma estructurada y predecible.

---

## Configuración del Servidor

**Archivo: `src/app.mjs`**

**Funcionalidad:** Inicializa el servidor, conecta a la base de datos, y carga las rutas para gestionar todas las
solicitudes relacionadas con superhéroes.

**Justificacion teorica:** app.mjs centraliza la configuración de la aplicación, conectando a MongoDB y
cargando las rutas necesarias. Esto permite una configuración modular y fácilmente escalable, asegurando
que la aplicación esté lista para manejar solicitudes en el entorno de desarrollo o producción.