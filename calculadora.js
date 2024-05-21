
/* -------------EJERCICIO DE LECTURA Y ESCRITURA */
const mostrarValor = () => {
    //getElementById = Obtener elemento por el ID
   const input1= document.getElementById ("valor1")
   // Este mostraria en la consola que es lo que se introduce en el input
   /* console.log(input1.value) */
   
   let valor1 = input1.value
    console.log(valor1)
    console.log("mostrando valor")

    const span = document.getElementById("input-valor")
    console.log(span)
//innerHMTL es para acceder a lo que hay dentro de esa etiqueta, en este caso 
// a la etiqueta span, pero lo cambia solo al oprimir el boton mostrar valor en este caso.
    console.log(span.innerHTML)
    span.innerHTML = valor1
}

//------------------------CALCULADORA-----------

//Creamos la función inputs, en este caso LeerImputs va a leer dos imputs y devolver estos valores 
const leerInputs = () => {
    console.log("leyendo inputs")
    //Obtenemos las etiquetas input conectandolas con el  HTML poniendoles el id
    let inputNumero1 = document.getElementById('input-numero-1')
    let inputNumero2 = document.getElementById('input-numero-2')

    //Obtenermos los valores de los inputs (vamos a guardar el contenido que ira dentro de las variables.)
     let numero1 = inputNumero1.value
     let numero2 = inputNumero2.value
    console.log(numero1, numero2)

    //validar que no esten vacios  
    if (numero1 === ' ') {
        //anunciar un error
        alert("El valor 1 no existe  o contiene caracteres no numericos")
        //interrumpir la ejecución
        return null
}

    if (numero2 === ' ') {
    //anunciar un error
    alert("El valor 2 no existe  o contiene caracteres no numericos")
    //interrumpir la ejecución
    return null
     }

     //parse = cambiar el tipo de dato
     numero1 = parseInt(numero1)
     numero2 = parseInt(numero2)
     console.log(numero1, numero2)

     //primera manera de hacerlo
     const numerosValidados = {
         numero1: numero1, 
         numero2: numero2
 }
    return numerosValidados 
    }
    //Esta es otra forma de devolver un JSON pero es mejor hacerlo con la anterior
      /*   return {
            numero1:numero1,
            numero2:numero2,  */
    

          
 //la manera de correcta de documentar es la siguiente

//RealizarOperación debe recibir el tipo de operación y realizar la operación-

const realizarOperacion = (operacion) => {
   const numeros = leerInputs()

   if (numeros === null){
    return
   }

    console.log(operacion, "con los numeros:", numeros.numero1, "y", numeros.numero2)

    let resultado = 0 
    //validar la operación 
    if (operacion === 'suma') {
       resultado = numeros.numero1 + numeros.numero2
    }
     
    if (operacion === 'resta') {
        resultado = numeros.numero1 - numeros.numero2
     }

     if (operacion === 'multiplicacion') {
        resultado = numeros.numero1 * numeros.numero2
     }

     if (operacion === 'division') {
        resultado = numeros.numero1 / numeros.numero2
     }
    /* console.log("resultado:", resultado) */
    mostrarResultado(resultado, operacion)
}   

//mostrarResultado debe recibir el resultado (resultado), de la operación  y mostrarlo al usuario
//ademas debe modificar el simbolo de operación que se realizo
const mostrarResultado = (resultado, operacion) => {
    console.log(resultado)
    const spanResultado = document.getElementById('resultado')
    spanResultado.innerText = resultado

    const spanOperacion = document.getElementById('operacion')
    
    if (operacion === 'suma'){
        spanOperacion.innerText = '+'
    }

    if (operacion === 'resta'){
        spanOperacion.innerText = '-'
    }
    
    if (operacion === 'multiplicacion'){
        spanOperacion.innerText = '*'
    }

    if (operacion === 'division'){
        spanOperacion.innerText = '/'
    }
}
