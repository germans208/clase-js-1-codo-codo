// let numero1 = parseFloat(prompt("Ingrese el primer numero"));
// let numero2 = parseFloat(prompt("Ingrese el segundo numero"));

// let resultado = numero1 + numero2;

// console.log(typeof resultado);

// console.log(String(resultado));

// let confirmacion = confirm("Esta seguro de querer continuar?");

// console.log(confirmacion);

let numero1 = parseFloat(prompt("Ingrese el primer numero"));
let numero2 = parseFloat(prompt("Ingrese el segundo numero"));
let operacion = prompt("Ingrese la operacion a realizar: 1) Suma 2) Resta 3) Multiplicacion 4) Division");

let cadena = `esto tambien es una cadena de texto`;
let cadena2 = 'esto tambien es una cadena de texto';
let cadena3 = "esto tambien es una cadena de texto";


if (operacion == 1) {
    let resultado = numero1 + numero2;
    console.log("El resultado es: " + resultado + " y el tipo de dato es: " + typeof resultado);
    //console.log("El resultado es", resultado);
    console.log(`el resultado es ${resultado} y el tipo de dato es ${typeof resultado}`);

    //contador = contador + 1;
    contador++;
    contador--;

    numero1 = numero1 + numero2;

    if (numero1 % 2 == 0) { // % modulo
        console.log("El numero es par");
    }else{
        console.log("El numero es impar");
    }

} else if (operacion == 2) {
    let resultado = numero1 - numero2;
    console.log("El resultado es: " + resultado);
} else if (operacion == 3) {
    let resultado = numero1 * numero2;
    console.log("El resultado es: " + resultado);
} else if (operacion == 4) {
    let resultado = numero1 / numero2;
    console.log("El resultado es: " + resultado);
} else {
    console.log("Operacion no valida");
}
























