// const argv = require('yargs').argv;

// console.log(argv.matematicas5);
// console.log(argv.nombre);

const opciones = {
    matematicas: {
        default:0,
        alias:'m'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{
        demand:true,
        alias:'p'
    }
}

const argv = require('yargs')
    .command('promedio', 'calcular el promedio', opciones)
    .argv

console.log(argv);
console.log("matematicas"+argv.p);


console.log("el promedio es:"+(argv.m+argv.i+argv.p)/3);
