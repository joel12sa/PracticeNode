const fs = require('fs/promises');

console.log('Primer Archivo Leer');
fs.readFile('Archivos/hola.txt', 'utf-8').then(text=>{
    console.log('Primer texto ', text)
})

console.log('Hacer cosas mientras lee ..')

console.log('Segundo Archivo Leer')
fs.readFile('Archivos/hola2.txt', 'utf-8', (err2, text2) => {   
            console.log('Contenido del segundo archivo:', text2);
});