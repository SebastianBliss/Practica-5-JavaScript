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
let usuario = {
    nombre: "Sebas",
    edad: 18, 
    ciudad: "Bogotá",
    ubicacion: { 
        latitud: 1.533365748,
        longitud: -2.343487597
    },
    amigos: ["Javier", "Pedro"]
}

console.log (usuario)
console.log (usuario.nombre)
console.log(usuario.ubicacion.latitud)

/* Podemos modificar las propiedades o listas, ej modificar la edad */
usuario.edad = 25 
console.log(usuario)