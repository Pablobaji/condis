// condicionales if, ifelse, switch

// let numero1 = 30;
// let numero2 = 20;
// if (numero1 > numero2) {
//     document.write ('El numero: '+numero1+ ' es mayor al numero '+numero2);
    
// }else{
//     document.write ('El numero: '+numero2+ ' es mayor al numero '+numero1);
// }
// pedir la edad del usuario decirle si es mayor de edad siempre y vuando te de  un valor mayor a 0

// let edad = prompt('Dame tu edad')
// if (edad>0) {
//     if (edad>=18) {
//         document.write('Eres mayor de edad')
//     } else {
//         document.write('No eres mayor de edad')
//     }
// }else{
//     document.write('Edad no valida')
// }

// let dia = prompt('Dame el dia de la semana').toLowerCase();
// switch (dia) {
//     case 'lunes':console.log('El dia seleccionado es lunes');
        
//         break;
//         case 'martes':console.log('El dia seleccionado es martes');
        
//         break;
//         case 'miercoles':console.log('El dia seleccionado es miercoles');
        
//         break;
//         case 'jueves':console.log('El dia seleccionado es jueves');
        
//         break;
//         case 'viernes':console.log('El dia seleccionado es viernes');
        
//         break;
//         case 'sabado':console.log('El dia seleccionado es sabado');
        
//         break;
//         case 'domingo':console.log('El dia seleccionado es domingo');
        
//         break;

//     default:console.log('Ingrese una opcion validad')
//         break;
// }
// valor termario

// let numero1 = 15;
// let numero2 = 20;
// let valor = (numero1>numero2) ? 'El numero 1 es mayor':'El numero 2 es mayor';
// document.write (valor);


// pedir 2 numeros y decir si son iguales o si es mayor o menor
// let num1 = prompt('Numero 1')
// let num2 = prompt('Numero 2')
// if (num1==num2) {
//    document.write('Los numeros son iguales');
// }else{
//    if (num1>num2) {
//       document.write('El numero '+num1+' es mayor que el numero '+num2);
     
//    } else {
//       document.write('El numero '+num2+' es mayor que el numero '+num1);
//    }
// }


// let numero = prompt('Ingrese su numero');
// let par = numero%2;
// if (par==0) {
//     document.write('Tu numero es par')
// } else {
//     document.write('Tu numero es inpar')
// }



//  let num1 = prompt('Ingrese el primer numero')
//  let num2 = prompt('Ingrese el segundo numero')
//  let op = num1/num2
//    if (num1==0 || num2==0) {
//       document.write('ERROR')
//    } else {
//       document.write('El resultado es= '+op);
//    }

function suma() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let su = numero1+numero2;
    document.write('El resultado es= '+su);
}
function resta() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let su = numero1-numero2;
    document.write('El resultado es= '+su);
}
function multiplicacion() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let su = numero1*numero2;
    document.write('El resultado es= '+su);
}
function divicion() {
    let numero1 = parseFloat(document.getElementById('num1').value);
    let numero2 = parseFloat(document.getElementById('num2').value);
    let su = numero1/numero2;
    document.write('El resultado es= '+su);
}