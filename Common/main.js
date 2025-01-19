const { platform, cpus, uptime } = require('os');
const { deleteV } = require('./delete.js');
//con EMscript es el from, extension .msj

console.log('Información Sistema operativo:');
console.log('Nombre del sistema:', platform());

const cpusInfo = cpus();
console.log('Información de las CPUs:', cpusInfo);
console.log('Encendido:', uptime());

console.log(deleteV("Hol como estamos chamo"));
