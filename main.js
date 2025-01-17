import { platform, cpus as _cpus, uptime } from 'node:os';

console.log('Informacion Sistema operativo:')
console.log('Nombre del sistema :', platform())
const cpus = _cpus();

console.log('Información de las CPUs:', cpus);
console.log('Encendido:', uptime());