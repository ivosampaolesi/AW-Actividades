//1-a
function saludar (){
    console.log('Hola bienvenido')
}
saludar()

//1-b
function saludarPersona (nombre){
    console.log(`Hola ${nombre} bienvenido`)
}

saludarPersona('Ivo')

//1-c
function esMayorDeEdad (edad){
    if(edad <18 ){
        return false
    }
    else{return true}
}

console.log(esMayorDeEdad (15))

//2-a
const esMayorDeEdad = (edad) =>{
    if(edad <18 ){
        return false
    }
    else{return true}
}

console.log(esMayorDeEdad (19))

//2-b
const compararNumeros = (numero1, numero2) => {
    if (numero1 < numero2) {
        console.log(`El número ${numero1} es menor que ${numero2}`)
    } else if (numero1 === numero2) {
        console.log(`El número ${numero1} es igual que ${numero2}`)
    } else {
        console.log(`El número ${numero1} es mayor que ${numero2}`)
    }
}

console.log("--- Bucle de comparación ---")
const numeroReferencia = 5
for (let i = 3; i <= 7; i++) {
    compararNumeros(i, numeroReferencia)
}

//3-a
{
    const suma = (a, b) => {
        console.log(`El resultado de la suma es ${a + b}`)
    }

    const resta = (a, b) => {
        console.log(`El resultado de la resta es ${a - b}`)
    }

    const operacion = (num1, num2, callback) => {
        callback(num1, num2)
    }

    operacion(20, 3, suma)
    operacion(14, 4, resta)
}

// 3-b
{
    const suma = (a, b) => {
        console.log(`El resultado de la suma es ${a + b}`)
    }

    const resta = (a, b) => {
        console.log(`El resultado de la resta es ${a - b}`)
    }

    const operacion = (num1, num2, callback) => {
        if (typeof num1 !== "number" || typeof num2 !== "number" || Number.isNaN(num1) || Number.isNaN(num2)) {
            console.log("Debe ingresar solo números.")
            return
        }
        callback(num1, num2)
    }

    operacion(9, 12, suma)
    operacion(2, 1, resta)
    operacion("5", 5, suma)
}