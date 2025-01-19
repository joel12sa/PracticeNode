const fs = require('fs');

const stats = fs.statSync('Archivos/hola.txt');
console.log(stats.size);
