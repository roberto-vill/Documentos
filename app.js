//estructura de cpontrol
//if..else
let num = 10

if (isNaN(num))
{
comsole.log('ingrese un numero')
}
else
{
    if(num===10)
{
    console.log('ES 10')

}
else if (num > 10)
{
    console. log('es Mayor de 10')
}
else
{
console.log('el numero es menor que 10')
}

}

if (num % 2 === 0)
{
console.log('Es Par')
}
else
{
console.warn('No es par')
}


// if(num===10)
// {
//     console.log('ES 10')

// }
// else if (num > 10)
// {
//     console. log('es Mayor de 10')
// }
// else
// {
// console.log('el numero es menor que 10')
// }

// //let numero= prompt('ingrese un numero')
// //parseint('string') convierte a entero
// //metodo isNAN()

// if (isNaN(num))
// {
// comsole.log('ingrese un numero')
// }

//solo puede entrar un mayor de edad
//si no es mayor debe ir con un tutor

// let edad = 5

// let tutor = false

// if (edad >= 18) 
// {
//     console.log('Entra a la Fiesta')
// }
// else if (tutor)
// {
// console.timeLog('Entra con Tutor')
// }
// else
// {
// console.log('Volve a Casa')
// }

let numdia = new Date().getDay()

switch (numdia) {
    case 0:
        console.log('domingo')
        
        break;
        case 1:
        console.log('lunes')
            
         break;
         case 2:
            console.log('martes')
                
        break;         
             case 3:
                console.log('miercoles')
                    
                 break;
                 case 4:
                    console.log('jueves')
                        
                     break;
                     case 5:
                        console.log('viernes')
                            
                         break; 
                         
                         case 6:
                            console.log('sábado')
                                
                             break;                     
                         


    default: 
    console.log('domingo')
                            
                         break;  


    
}

// let comando = prompt('ingresa alerta, consola o print')

// switch (comando) {
//     case 'alerta':
//         alert('usando alerta')
//         break;
//     case 'consola' :
//         console.log('consola')
//         break;   

//     default:

//     document.write('navegador')
//         break;
// }

//while

let vecesSumar= 4
let Total = 0

while (vecesSumar = 0)
{
    Total +=1
    vecesSumar -= 1
    console.log(`TotalSuma: ${Total} veces de suma es ${vecesSumar}`)
    

}