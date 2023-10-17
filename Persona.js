
const COLOR_PERSONA='\x1b[32m%s\x1b[0m';
const Perro = require("./Perro.js");

class Persona {
    #nombre = "def nombre";
    #animo=true;
    #bueno=true;

    habla(msj) {
        console.log(COLOR_PERSONA, msj);
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre
    }

    encuentra(Perro) {
        if (this.#animo > 0) {
        this.habla("Hola " + Perro.getNombre())
        this.darDeComer(Perro)  
    }else{
        this.habla("Fuera " + Perro.getNombre())
    }
       
    }
    darDeComer(perro){
    if (this.#bueno> 0) {
        this.habla("Queres comer " + perro.getNombre()+"?")
       perro.aceptaComida(this)
    }else{
        this.habla("Fuera " + perro.getNombre())
    }
}
}

module.exports= Persona;
