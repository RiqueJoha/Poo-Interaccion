
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
    darDeComer(Perro){
    if (this.#bueno> 0) {
        this.habla("Queres comer " + Perro.getNombre()+"?")
        if (Perro)aceptaComida() {
            this.habla("Mueve la cola a " + persona.getNombre())
            this.aceptaComida(persona)
        } else {
            this.habla("Ladra a " + persona.getNombre())
        } 
    }else{
        this.habla("Fuera " + Perro.getNombre())
    }
}
}

module.exports= Persona;