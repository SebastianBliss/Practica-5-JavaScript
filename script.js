/* Comentario en bloque */
//Para comentar solo una linea se puede poner el doble slash

console.log("Hola Mundo");
/* Cuando son nros no es necesario ponerlo entre comillas */
console.log(1234)
console.log("Cualquier cosa que queramos ver en la consola")

//Tipos de datos

//Hay dos maneras de almacenar datos, una es let y const

/* //Declarar una variable siempre usar let par variables, con var se puede hacer algo similar, pero permite sobre escribir entonces tiene errores */
let nombre = "Sebastian"
console.log(nombre)
nombre = "JuanSe"
console.log(nombre)


/* Ejemplo con la vriable numero */
let numero1 = 7
let numero2 = 9

let resultado = numero1 + numero2

console.log ("resultado:", resultado)

/* //Declarar una constante */
const pi= 3.1416
console.log(pi)


//------------------------Tipos de datos----------------------------------

//Strings se usa para texto
const ciudad = "Bogotá"
const pais1 = "Colombia"
const pais2 = "Argentina"
console.log (ciudad, pais1, pais2)

//JS es un lenguaje debilmente tipado
//Numeros = Int (enteros), float (Decimal)
//Cuando son nros no se pone entre comillas porque asumiria que es un dato de texto y no numerico
const suma = 5
const edad = 20.5
const numeroNegativo = -10


//Booleanos o Bool en JS solo hay verdadero o falso true or false
let esVerde = true
let esMorado = false

//-------------------Estructuras de datos---------------------------

// Listas = array o arrays o vectores se pueden crear listas vacias

let listaDeNumeros = [20, -55, 100]
console.log(listaDeNumeros)

//Ver un elemento de la lista se pone pegado entre corchetes cuadrados la posición del dato.
console.log(listaDeNumeros[0])
console.log(listaDeNumeros[1])
console.log(listaDeNumeros[2])

let listaDeCiudades = [
    "Bogotá", 
    "Medellín", 
    "Cali"]
console.log (listaDeCiudades)

/* para modificar valores de las listas ingresar a la posición que queremos y asignar el nuevo valor */

listaDeCiudades[2] = "Boyacá"
console.log(listaDeCiudades)

let listaDeListas = [listaDeNumeros, listaDeCiudades]
console.log (listaDeListas)

//acceder al dato medellín
console.log (listaDeListas[1][1])

// JSON (javascript object Notation) para agrupar información referente a un objeto(entidad o la representación de algo en la vida real), un usuario o una ubicación. 
//Clave -Valor
//JSON es el standar en el que se envían la información en web.
let usuario = {
    nombre: "Sebas",
    edad: 18, 
    ciudad: "Bogotá",
    /* se agrega otro objeto al ponerle el corchete {} en lugar de los dos puntos */
    ubicacion: { 
        latitud: 1.533365748,
        longitud: -2.343487597
    },
    amigos: ["Javier", "Pedro"]
}

console.log (usuario)
console.log (usuario.nombre)
console.log(usuario.ubicacion.latitud)

/* Podemos modificar las propiedades o listas, ej modificar la edad entrando a al propiedad usuario.edad = al valor que le asignemos nuevo*/
usuario.edad = 25 
console.log(usuario)


//Tipos de datos "vacios" - Errores o alertas que nos muestra JS de que no hay dato o no corresponde.

//null - nulo representa que ese espacio de memoria va a estar vacio, tiene ese nombre de memoria pero no se esta usando el espacio
let espacioVacio = null

//Undefined - Indefinido
let noDefinido = undefined
/* ejemplo el dato apellido que no ha sido asignado en el json */
console.log(usuario.apellido)

//Not a number - No es un numero
const noEsNumero = NaN
const multiplicación = 10 * "hola"
console.log(multiplicación)

//--------------------- Estructura de control ---------------------

// Bucles proceso que se remite de forma finita un nro de veces especifo
//Loop un proceso que se repite indefinidamente.
    
const listaAnimales = [
    "perro",
    "gato",
    "oso",
    "gallina"
]
/* para contar cuantos elementos tenemos en ese array o lista - length es tamaño */
console.log ("tamaño del array", listaAnimales.length)


/* for es una palabra reservada para crear bucles */
/* se sigues 3 instrucciones. 
PARAMETROS
1. El contador en este caso inicia en 0. En el ej: (let i = 0)
2. será una condición será cuando el bucle se detenga (control===10) En el ej: i < listaAnimales.length
3. Como queremos que se comporte en cada vuelta En el ejemplo (i++)
 */
/* el uso de los 3 iguales(=) es comparar, si se pone solo uno(=) es asignar */
/* entre {} se pone el codigo en si mismo, lo que hará */
/* for(let contador = 0; contador < listaAnimales.length; contador = contador + 1){
    console.log (contador)
    console.log(listaAnimales[contador])
 */   
//También se puede poner al final ++ en lugar de poner el contador + 1
/* for(let contador = 0; contador < listaAnimales.length; contador = contador ++){
    console.log (contador)
    console.log(listaAnimales[contador]) } */

// i hace referencia a index, usualmente así se encuentran
for(let i = 0; i < listaAnimales.length; i++) {
    console.log(i)
    console.log(listaAnimales[i])
}

/* CONDICIONES/CONDICIONALES*/
// - Igualdad: ===
// - Directe de: !== 
// - Menor que: <
// - Mayor que: >
// - Menor o igual que: <=
// - Mayor o Igual que: >=
// if es igual a decir, si esto se cumple, haga tal ...
/* EJEMPLEO : 
if (4 < 10) {
    console.log ("la condición es verdera")
}
// Else hace referencia "si no" o "en caso contrario" se cumple la condiciém anterio entonces muestre tal mensaje
 */

/* let numero= 10
if (10 === numero) {
    console.log ("la condición es verdera")
} else {
    console.log("la condición en falsa")
}
 */
let numero= 10
if (10 === numero) {
    console.log ("Numero es 10")
} else if (numero === 11) {
    console.log("Numero es 11")
} else if (numero === 12) {
        console.log("Numero es 12")    
} else {
    console.log("No es ni 10, ni 11, ni 12")
}


//---------------------Operadores Lógicos--------------------
//and = y = &&
//or = o = ||

//Ejemplo con or = o = ||
let texto = "texto"

/* if (texto === "a" || texto === "algo") {
    console.log("la condición es verdadera")
}
 */

if (texto === "a" || texto === "b" || texto === "c") {
    console.log("la condición es verdadera")
} else {
    console.log("el texto no es ni 'a' ni 'b' ni 'c'")
}

// and = y= &&
let numero3 = 20

if (numero3 > 0 && numero3 < 10) {
    console.log("Nuestro número esta entre el 0 y el 10")
} else {
    console.log("Nuestro número no esta entre el 0 y 10")
}

//---- Este es otro para bucles - While = Mientras

let contador=0
while (contador < 5) {
    //console.log("ciclo:", contador)
    //contador = contador+1 o se escribe solo contador++ que sería lo mismo.
    contador++
    }


//--------------------FUNCIONES-------
// Estructuras que reciben paramentros, procesarlos  
// y devolver algun valor dependiendo de la función
//Ayuda a agrupar codigo y ejecutarlo en el momento que queramos, cuantes veces lo hagamos
//Sirve para agrupar codigo con un solo fin, por ejemplo sumar. y luego se puede reutilizar

//Declaración de la función, le indicamos cuantos parametros recibira, ej: valor1, valor2

//Declaración antigua con JavaScript 
/* function sumar (valor1, valor2) {
      let resultado = valor1 + valor2
      return resultado
} */

//Declaración ACTUAL con ECMAscript
//Funcion flecha - normalmente van a ser constantes
const sumar = (valor1, valor2) => {
    let resultado = valor1 + valor2
    return resultado
}  

//al poner los dos parentesis entiende que estamos llamando/ejecutando la función

//Primera manera de hacerlo
let resultadoSuma = sumar(5, 10)
console.log("el resultado de la suma", resultadoSuma)
 

//Segunda manera de hacerlo funcionan igual
console.log("el resultado de la suma1", sumar(5, 10))

console.log("el resultado de la suma2", sumar(10, 50))
console.log("el resultado de la suma3", sumar(100, 35))
console.log("el resultado de la Suma4", sumar(44566, 45656))


