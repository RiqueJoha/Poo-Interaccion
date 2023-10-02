const Perro = require("./perro");
const Persona = require("./persona");



const persona = new Persona();
const perro = new Perro();

persona.setNombre("Jose");
perro.setNombre("Terry");

persona.acaricia(perro);
perro.mueveLaColaA(persona);
