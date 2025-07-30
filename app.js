let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado); 
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
    
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];

// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java', 'Ruby', 'GoLang')

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function allItems(list) {
    for(let i = 0; i < list.length; i++) 
    {
        console.log(list[i]);
    }
}

// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function allItemsReversed(list) {
    for(let i = list.length-1; i < -1; i--) 
    {
        console.log(list[i]);
    }
}

// Crea una función que calcule el promedio de los elementos en una lista de números.
let numbers = [1,2,3,5,19,12,20];
function average(list) {
    sum = 0;
    for (let i=0; i < list.length; i++) 
        sum += list[i]
    return sum/list.length;
}
console.log(average(numbers));

// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function maxMin(list) {
    max = list[0];
    min = list[0];
    for (let i=0; i < list.length; i++) {
        max = max > list[i] ? max : list[i];
        min = min < list[i] ? min : list[i];
    }
    return [min, max];
}
console.log(maxMin(numbers));

// Crea una función que devuelva la suma de todos los elementos en una lista.
function sum(list) {
    let sum =0;
    for(let i = 0; i < list.length; i++)
        sum += list[i];
    return sum;
}

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function findInList(number, list) {
    if (!list.includes(number)) 
        return -1;
    return list.indexOf(number);
}

// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function addLists(list1, list2) {
    if (list1.length != list2.length)
        return -1;

    let result = [];
    for(let i =0; i < list1.length; i++) {
        result.push(list1[i]+list2[i]);
    }

    return result;
}

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function squaredList(list) {
    
    for(let i = 0; i < list.length; i++) {
        list[i] = list[i] * list[i];
    }
    return list;
}
