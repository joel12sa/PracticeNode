const { readFile } = require('node:fs/promises');

(async () => {
        console.log('Primer Archivo Leer');
        const text1 = await readFile('Archivos/hola.txt', 'utf-8');
        console.log('Contenido del Primer Archivo:', text1);

        console.log('Hacer cosas mientras lee ..');

        console.log('Segundo Archivo Leer');
        const text2 = await readFile('Archivos/hola2.txt', 'utf-8');
        console.log('Contenido del Segundo Archivo:', text2);
    
})();

