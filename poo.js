
const Perro = require("./Perro.js");
const perros = require("./perros.js");
const Persona = require("./persona.js");



const persona = new Persona();
const perro = new Perro();

persona.setNombre("Jose");
perro.setNombre("Terry");

persona.encuentra(perro);
perro.encuentra(persona);


persona.encuentra(perros[0])
persona.encuentra(perros[1])

