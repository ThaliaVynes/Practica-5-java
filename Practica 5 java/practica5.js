//EJERCICIO 1 – Calculadora de Promedio y Rendimiento

// Pide al usuario cuatro notas (del 0 al 100).
// Calcula el promedio y muestra un mensaje según el resultado:

// “Excelente” si el promedio es mayor o igual a 90

// “Bueno” si es mayor o igual a 75

// “Regular” si es mayor o igual a 60

// “Insuficiente” en caso contrario

           //EJERCICIO 1
// let nota1 = Number(prompt("Ingrese su primera Nota "));
// let nota2 = Number(prompt("Ingrese su segunda Nota "));
// let nota3 = Number(prompt("Ingrese su tercera Nota "));
// let nota4 = Number(prompt("Ingrese su cuarta Nota "));

// let promedio = nota1 + nota2 + nota3 +nota4;

// if (promedio >= 90) {
//     alert("Excelente")
// } else if (promedio >= 75) {
//     alert("Bueno")
// } else if (promedio >= 60) {
//     alert("Regular")
// } else {
//     alert("Insuficiente")
// }


// EJERCICIO 2 – Calculadora de Tarifa de Transporte
// El programa debe pedir al usuario:

// Su edad

// Si es estudiante (“sí” o “no”)

// La distancia que recorrerá (en kilómetros)

// Reglas del costo:

// Menores de 18 pagan 50% del precio base

// Estudiantes pagan 75% del precio base

// Mayores de 60 pagan 40% del precio base

// Si el viaje es mayor a 30 km, se agrega un 10% adicional al total

            // EJERCICIO 2

// let age = Number(prompt("Ingresa tu edad "))
// let estudiante = prompt("Eres estudiante si o no ")
// let distancia =Number( prompt("Que distancia recorera"))
// let precioBase = 100
// let precioFinal = precioBase

// if (age < 18  ){
//     precioFinal = precioBase *0.5  
// } else if (estudiante == "si"){
//     precioFinal = precioBase * 0.75   
// }else if(age > 60){
//     precioFinal = precioBase * 0.4
// }

// if (distancia > 30) {
//   precioFinal = precioFinal * 1.10
// } alert(precioFinal)



// Ejercicio 3 – Menú de Conversión de Unidades
// Muestra un menú con 4 opciones:

// Convertir de Celsius a Fahrenheit

// Convertir de Fahrenheit a Celsius

// Convertir de Metros a Kilómetros

// Convertir de Kilómetros a Metros

// El usuario debe elegir una opción y escribir el valor a convertir.
// El programa mostrará el resultado correspondiente.

          
            // EJERCICIO 3


// let opcion = prompt(
// "1. Celsius a Fahrenheit\n2. Fahrenheit a Celsius\n3. Metros a Kilómetros\n4. Kilómetros a Metros")

// let valor = Number(prompt("Ingrese el valor a convertir"))
// let resultado

// if (opcion == 1) {
//     resultado = (valor * 9/5) + 32
//     alert("Resultado: " + resultado + " °F")
// } else if (opcion == 2) {
//     resultado = (valor - 32) * 5/9
//     alert("Resultado: " + resultado + " °C")
// } else if (opcion == 3) {
//     resultado = valor / 1000
//     alert("Resultado: " + resultado + " km")
// } else if (opcion == 4) {
//     resultado = valor * 1000
//     alert("Resultado: " + resultado + " m")
// } else {
//     alert("Opción no válida")
// }




// Ejercicio 4 – Sistema de Descuentos en una Tienda
// El usuario debe ingresar:

// El precio total de su compra

// Si tiene tarjeta de cliente frecuente (“sí” o “no”)

// Reglas:

// Si el total es mayor a 500, aplica un 10% de descuento

// Si además tiene tarjeta, aplica un 5% adicional

// Si el total es menor o igual a 100, aplica un recargo del 5%

// El programa debe mostrar el precio final y un mensaje indicando qué descuento se aplicó

             // EJERCICIO 4
             