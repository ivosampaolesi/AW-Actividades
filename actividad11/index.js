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