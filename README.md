# Challenge Frontend para Instaleap
### 1. Components:
- **App.js:** Se utiliza el provider de redux para cargar la data del endpoint en el "state" centralizado para toda la app. Tambien se empaqueta la app en el "BrowserRouter" para poder generar la navegación.
- **main.js**: Componente base donde se envía la data necesaria a los demas componetes.
Ademas, en este componente se crea el redireccionamiento a las url de las diferentes vistas que componen la plicación y se crea su estructura base (header - lista de elementos - menu).
- **menu.js**: Es el menú de la aplicación. Contiene los botones de navegación/filtro para las categorias de series y peliculas. Valida el estado activo del botón por medio de la propiedad "currentpage" que contiene el "location.pathname" de la aplicación. 
- **list.js**: Es el componente encargado de recorrer el arreglo de las películas y series para pintarlas en su respectiva vista. Valida si es película o serie para asignarle su respectivo icono.
-  **home.js / movies.js / series.js**: Son los componentes para cada vista. Filtran el arreglo de películas y series para eniarlos al list.js.

### 2. Redux:
- **ActionCreators.js:** Crea el llamado de la data al endpoint y crea los casos para el manejo de la respuesta.
- **configureStore.js:** Configura como se carga la data en la aplicación por medio del "store".
- **movies.js:** Administra los diferentes casos para crear el objeto final que se cargara en la aplicación en el "store".

### 3. Estilos:
La aplicación es responisve ajustando los estilos para Desktop y Mobile, hechos pensando Mobile First.
Cada componente tiene su propia hoja de estilos que contiene unicamente los estilos de este. Ademas hay 2 archivos .sass que contienen recursos de estilos utilizados por todos los componentes. Estos archivos son:
- **colors.sass:** Contiene las variables con los colores utilizados en la app.
- **fonts.sass:** Importa las fuentes utilizadas en la app.
- **icons.sass:** (Dentro de la carpeta de icons) Enlaza los archivos de las fuentes 

### 4. Icons:
En la carpeta de "icons" se encuentran los archivos de las fuentes de los iconos y el sas donde asigna las entidades correspondientes a los iconos a una clase de css.

### 5. Pruebas unitarias:
Creé un ejemplo de prueba unitaria para la vista de "home" en la que se comprueba que se esten renderizando todos los elementos del arreglo de peliculas y series.

### 6. Herramientas utilizadas:
- **react-router-dom:** Permite crear la navegación en la aplicación por medio del cambio de la url de forma asicrona.
- **redux:** Permite centralizar el "state" de la aplicación y ayuda a hacer el consumo de servicios de manera organizada.
- **react-transition-group:** Para crear la transición en el cambio de una visata a otra.
- **SASS:** Los estilos de la aplicación fueron creados con SASS hacerlo mas rapida y limpia y para tener utilidades como las variables.
- **enzyme:** Para realizar pruebas unitarias.