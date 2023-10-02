
const COLOR_PERSONA='\x1b[32m%s\x1b[0m';
class Persona {
    #nombre = "def nombre";
    habla(msj) {
        console.log(COLOR_PERSONA, msj);
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre
    }
    acaricia(perro) {
       this.habla("Hola " + perro.getNombre())
    }
    
}

module.exports= Persona;