//1-a
let edad = 17
if(edad >= 18){
    console.log('Es mayor de edad')
}
else{console.log('Es menor de edad')}

//1-b
let numero = 6
if(numero%2===0){
    console.log('El numero es par')
}
else{console.log('El numero es impar')}

//1-c
let nota = 3
if(nota<4){
    console.log('Reprobado')
}
else if(nota<=7){
    console.log('Aprobado')
}
else{console.log('Excelente')}

//2-a
for(let i = 1; i<= 10; i++) {
    console.log(i)
}

//2-b
for(let i = 10; i>= 1; i--) {
    console.log(i)
}

//2-c
for(let i = 0; i< 20; i++){
    if(i%2===0){
        console.log('El numero es par')
    }
    else{console.log('El numero es impar')}
}

//2-d
for(let i = 0; i< 20; i++){
    if(i%2===0){
        console.log(`El numero ${i} es par`)
    }
    else{console.log(`El numero ${i} es impar`)}
}