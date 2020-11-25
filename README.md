# REACT PROYECTO:

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje.

# UTILIZAR API:

El primero paso es utilizar el servicio de un api en este caso esta: [https://rickandmortyapi.com/documentation/#get-all-characters]

Crearemos una nueva carpeta llamada Services y haremos un fichero api.js.

El objetivo es pintar en pantalla: foto, nombre, especie. Utilizaremos la función fetch que nos devolverá los datos que necesitamos. En este caso como el **fetch** nos devuelve un objeto con un array es importante verificar donde se encuentra el array que neceitamos para que luego el camino a las informaciones sea lo más sencillo posible. (aquí sería data.results).

Una vez que tengamos los datos tenemos que llamar nuestra función de fetch en nuestro fichero principal de React que es App.js.

# FILTRADO DE PERSONAJES

La segunda parte consiste en poder buscar los personajes por nombre. Para eso, añadimos un<input>a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.
Al <input> asociamos el **event current target** que pasamos a través de **lifting** a APP.js. par aque haya comunicación entre los componentes.

# DETALLES DE PERSONAJES

Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para hacer esto usaremos rutas y **React router**. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto. Hemos utilizado la funcíon **renderDetails** que con un find recore nuestra array y nos devuelve datos booleanos, aquí haremos un condicional dónde declararemos que si nuestra nueva array FoundCharacter no es undefined tendrá que devolver el componente CharacterDetail (que hemos creado anteriormente)con todas las nuevas informaciones, que pasaremos con props al comonente. Aquí también fundamental identificar bien lo datos que necesitamos y leer bien el array para asisgnar la ruta correcta.

# DETALLES DE CALIDAD

1. Si estando en el campo de filtrado pulsamos intro debéis impedir que el navegador navegueo cambie la ruta sin querer. Para evitar que al pulsar Intro aparezca el punto de interogación y que la pagína cambie de ruta utilizamos **onSubmit**, en este caso lo ponemos el evento al form que incluye el input porque es allí que l@s usuri@s podrán las informaciones y ejecuteremos un **prevent default**.

2. Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente. Aquí pasaremos por props en el **value** de nuestro input el textInput que anteriormente hemos guradado en una constante.

3. Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX. Aquí tenemos que poner una **condición**. la declaramos en CharcterList porque despúes el map queremos que nos devuleva nuestra nueva array en el caso se cumpla la condicíon y en caso contrario que nos devuelva el mensaje de error. He utilizado un **ternario** porque me resulta más fácil la sintaxis.

4. El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas. Aquí tenemos que utilizar **includes toUpperCase** para que se escuche el evento indipendentemente de las mayúscolas o minúsculas.
