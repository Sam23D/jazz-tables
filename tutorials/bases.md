## Bases de desarrollo de aplicaciones web

Imagina hacer una aplicacion web es como hacer una casa, una casa requiere de:

- Simientos / Ventanas / Puertas / Camas etc...

- Luz / Gas / Agua, etc...

- Colores / Orden / Organizacion, etc.. 
- y mucho mas...

Una aplicacion web necesita:

##HTML

HTML viene siendo lo que cumple con la funcion de Planos, Camas, Simientos, Ventanas, se puede ver como lo tangible, 

HTML es un un conjunto de **Elementos/Eriquetas**: `input`, `img`_(image)_, `button`, `table`, `div`, `p`_(paragraph)_, etc...

Cada **elemento** tiene **atributos** como por ejemplo el elemento `img` requiere el atributo `src` que especifical la ruta de la imagen que se va a renderizar, `input` tiene `placeholder` que representa el valor de marca de agua en el input, todos los elementos tienen diferentes atributos que ayudan a configurar todo tipo de parametros de los elementos como: altura, color, ruta de la imagen o el video, todo elemento tiene una lista diferente de atributos, no es necesario aprenderselos todos hay donde consultarlos https://www.w3schools.com/html/html_attributes.asp 

HTML se utiliza para mostrarle informacion al usuario de una u otra manera ya sea texto con un `p`,  `h1` para titulos,  imágenes de perfil con `img` tambien para `video`, html se utiliza para mostrar informacion a nuestro usuario, y al mismo tiempo tambien para poder recibir informacion de el, como en un `input` o `textarea` si queremos que el usuario ingrese texto de algun modo, por ejemplo el elemento `input` se puede modificar con el atributo `type` para representar si es un `checkbox` en lugar de recibir texto, html es nuestra **interfaz con el usuario**

Una de las cosas importantes es poder referenciar a un **elemento** en especifico, para eso se usa el atributo `id`, lo importante de este atributo es que es `unico` por elemento, no pueden existir dos elementos diferentes con el mismo `id`, y si se repite en dos elementos o mas elementos el primero en ser asignado se lo queda, otro de los atributos importantes es `class` este nos permite identificar por  `categoria`, podemos tener muchos elementos con la misma `class` y asi poder referirse a ellos como un grupo, digamos que queremos que los elementos con clases `class="msg"` tengan el borde inferior de color gris, y que su palomita se ponga azul cuando el usuario lo lea, estos identificadores nos van a servir cuando necesitemos hacer este funcionamiento y necesitamos usar _html_ en conjunto con _css_ o con _Javascript_

####Estructura basica de un Elemento HTML

Un elemento HTML se compone por 3 partes principales:

- Nombre del elemento
- Lista de atributos
- Lista de elementos hijo

Con el siguiente formato:

```html
<!-- estructura -->
<nombre [atributos] > elementos_hijo </nombre>

<!-- ejemplos -->
<label for="name_input"> Nombre </p>
<ul id="fruit_list">
  <li class="fruta">Manzana</li>
  <li class="fruta">Sandia</li>
  <li class="fruta">Mango</li>
</ul>
<div class="user_card">
  <p>Juan</p>
  <p>Peres</p>
</div>
```

Los elementos hijo pueden ser mas elementos de html, como la lista especificada por `ul` _(unordered list)_ tiene adentro varios elementos `li`_(list items)_, esto nos permite hacer arboles de elementos html, este arbol de elementos html es la estructura de nuestra pagina web. 

De manera mas general los elementos html se podrian decir que son pasivos o activos, lo pasivos son elementos que solo nos sirven para desplegar informacion, como un parrafo, una imagen, una tabla, y los activos, son elementos que nos ayudan a recibir eventos del usuario, como un cuando escribe su usuario, o un boton de _Log In_ hasta un link que nos redirige a otra pagina.

Utilizando todos los elementos en conjunto podemos hacer aplicaciones que nos ayuden a recibir datos de un cliente, o a mostrarles informacion relevante en base a diferente las acciones que el cliente ejecute.

_Ejemplo codigo html:_

```html
<!-- Ejemplo de login form -->
<div id="login_card" >
  <label>Usuario</label>
  <input type="text" id="user_input">
  <label>Constraseña</label>
  <input type="text" id="password_input">
  <button>Iniciar sesion</button>
</div>
```

####Estructura basica de un Archivo HTML

Como vimos podemos crear estructuras complejas con un árbol de elementos, las paginas html se tienen que tener siempre una raiz principal que tiene que ser así:

```html
<html>
  <head> ... </head>
  <body> ... </body>
</html>
```

Se define con la extension `.html` y una estructura final es algo parecida a la siguiente:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <h1>Hola mundo!</h1>
   <!-- Elementos van aqui -->
    <script src="./app.js"></script>
  </body>
</html>
```

Lo importante de saber es que se compone de dos partes principales: `head` y `body`

El `head` se utiliza generalmente para agregar informacion de la pagina como SEO, metadatos  y probablemente para lo que mas lo vayan a usar, es para **referenciar archivos de css**, por medio de elementos `link` y su atributo `href`

El `body` se utiliza para agregar el cuerpo de nuestra aplicacion web, los inputs, botones e imagenes se tienen que insertar dentro del `<body> </body>`, este es de donde nosotros empezaremos a extender nuestro arbol, para que se rendericen en nuestra pagina es necesario que vayan como hijos del elemento `body`, del mismo modo se recomienda que los archivos de javascript se carguen al final de este elemento

Hay dos etiquetas nuevas, `<link>` nos ayuda a ligar archivos de estilo CSS y `<script>` nos ayuda a ligar los archivos que contienen nuestra logica en Javascript

#####Lista de links externos de consulta

https://www.w3schools.com/tags/default.asp lista detallada de elementos html

## CSS

CSS viene siendo la pintura en las paredes, o la posision de hacia donde apunta el sillon en la sala, este nos ayuda a especificar colores, margenes, posicion, orden, si es columna si es pegado al borde de la pagina, css es el que le da orden y de como se ven los elementos html.

Podemos hacer que un `input` de contraseña se ponga de bordes rojos si es muy corta con `border: solid 1px red;`, o podemos hacer que la barra de navegacion de scroll junto con la pagina con `#navbar{ position: absolute; top: 0 }`

Con css podemos agregar en los detalles que html no nos provee, css es diferente a html, su enfoque no es en hacer los objetos tangibles, sino en controlar como el usuario los ve, para eso necesitamos una manera de como referenciar los elementos que existen en `html` con la informacion que tenemos en `css`

```html
<!-- ./app.html -->
<html lang="en">
  <head>
    <!-- referenciamos el archivo./style.css para que sus reglas se apliquen -->
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <h1>Hola mundo</h1>
  </body>
</html>
```

```css
/* ./style.css */
.h1{ color: blue}
```

Esto hace que el texto `Hola mundo` sea de color azul

#### Estructura basica de un Archivo CSS

Un archivo de CSS se especifica con la extension `.css` y tiene una estructura parecida a la siguiente:

```css
selector{
  attributo: valor;
  ...
  color: green;
  font-size: 24px;
}

#recipe-title{ font-size: 24px; color: black }

.ingredients{ font-size: 16px; color: grey }
```

Este se compone de un `selector` y un conjunto de atributos que se aplicaran a todo elemento que cuadre con ese selector, este selector es nuetra referencia a los elementos que existen en el documento `html`.

Los tres principales selectores son:

**Por elmento** (`p`, `h1`, `img`, `div`, etc...), estos selectores son iguales que los nombres de cada elemento de html, y aplican a todos los elementos de que sean del elemento especificado, por ejemplo la siguiente linea haria que todos los botones sean verdes y su tamaño de letra sea 18px:

```css
button{ color: green; font-size: 18px }
```



**Por id** definido por un `#` (`#nombre`, `#submit_button`, etc...), este tipo de selector va a aplicar a el elemento que lleve el id especificado ex:

```css
#book-title{ color: grey, font-size: 24px }
```

Hara que el elemento que tenga su id (`<h1 id="book-tile">Harry Potter<h1>`) tenga color gris y su tamaño de letra sea de 24px



**Por clase** definido por un `.` (`.list_item`, `.rounded`, `.card`) , este tipo de selector buscara *todos* los elementos en la pagina que hagan match con ese selector y aplicara los atributos definidos, ex:

```css
.rounded{ border-radious: 5px }
```

Hara que cualquier elemento de la forma( `<div class="rounded">`) tenga esquinas redondeadas de 5px

## Javascript

Javascript viene cumpliendo la funcion de los servicios en una casa, es lo que le da dinamismo a las los elementos, de nada sirve un refri si no enfria, para que queremos un lavabo sin agua, es el que se encarga de que la informacion se use para algo, que las cosas se muevan, javascript es un lenguaje de programacion utilizado para dar funcionalidad a nuestro arbol de html, nos permite agregar elementos, reaccionar cuando un `input` cambia de valor, o para agregar/eliminar elementos de el.

Por si solo es toda una materia que abarcar, que no entraremos en detalle, pero a grandes rasgos con javascript se puede:

- Realizar cálculos
- Descargar archivos
- Guardar informacion
- Solicitar informacion a un servidor
- Acceder a elementos por su `id` o su `class`
- Agregar, editar, eliminar elementos de HTML al igual que modificar sus atributos

_Ejemplo código Javascript:_

```javascript
//datos 
let name = "Juanito"
let lastname = "Peres Prado"

let person = {
  name: "Juanito",
  lastname: "Perez Prado",
  age: 12
}

//funciones
let fullname = (first_name, last_name) => first_name + " " + last_name
let saludar = (nombre) => "Hola " + nombre + "!"

//iteradores
let names = ["Kike", "Jazz", "Paul"]
for( name in names){
  console.log( saludar(name) )
}
```



En conjunto con html y css

```html
<!-- ./app.html -->
<html lang="en">
  <head>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <script src="./app.js"></script>
  </body>
</html>
```

```javascript
// ./app.js
console.log("Hola mundo")
```



##DOM

Ya habiamos hablado de nuestra pagina web como si fuera un arbol, en realidad lo es, los exploradores chrome, safari, etc... agarran el documento `html`, ven todos los correspondientes archivos `css` y `js` lo juntan en algo que se le conoce como **Document Object Model**, esta es la estructura de datos final que el explorador conoce como tu aplicación/pagina web, el **DOM** es la agrupacion de `html`, `css` , `javascript`  que sera nuestra aplicacion. 

La manera de referirse a el mediante javascript puede ser:

```javascript
//obtener elementos por id y clase
let user_input = document.getElementById("user_input")
let fruits = document.getElementsByClassName("fruta")


let fruit_list = document.get_element_by_id("fruit_list")

//crear elementos propios
let new_fruit = document.createElement("li")
//cambiar atributos del elemento
new_fruit.innerHTML = "Granada"
//agregar un elemento como hijo de otro
fruit_list.append_child(new_fruit)
```



######_Estado del arte_

Trabajar con el DOM directamente a travez de llavascript tiende a hacerse complicado conforme la aplicacion crece y propenso a errores, si has escuchado de `JQuery` es una libreria que sirgio de lo complejo y repetitivo que era acceder al DOM, pero no fue suficiente, entre las soluciones que hay hoy en dia, la mas popular es la de tener un *Virtual DOM* donde todo se maneje desde javascript, y el DOM de la pagina se cree en copia al virtual, librerias y frameworks se han hecho de esta manera, `React`, `Angular`, `Vue` por mencionar los mas populares, si bien estas son las nuevas librerias que se utilizan, estas en el fondo son los mismos conceptos que acabamos de ver, es importante entenderlos y saber como funcionan si queremos aprender las siguientes librerias tambien

