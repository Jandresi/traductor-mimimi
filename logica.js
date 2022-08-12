// Variables
let vocalesMin = ['a','e','i','o','u'];
let vocalesMay = ['A','E','I','O','U'];
let vocalesMinTilde = ['á','é','í','ó','ú'];
let vocalesMayTilde = ['Á','É','Í','Ó','Ú'];
let textoPorTraducir = '';

// DOM
const entrada = document.getElementById('entrada');
const boton = document.getElementById('traducir');
const resultado = document.getElementById('resultado');

// Función encargada de reemplazar las vocales
const traducir = cadena => {
    let aux = cadena.split('');
    let traduccion = '';
    aux.map(letra => {
        if(vocalesMin.includes(letra)) traduccion += 'i';
        else if(vocalesMay.includes(letra)) traduccion += 'I';
        else if(vocalesMinTilde.includes(letra)) traduccion += 'í';
        else if(vocalesMayTilde.includes(letra)) traduccion += 'Í';
        else traduccion += letra;
    });
    return traduccion;
}

// Ejecuta la función cada que se presiona una tecla
entrada.addEventListener('keyup', () => {
    let textoFinal = traducir(entrada.value);
    resultado.innerHTML = textoFinal;
});