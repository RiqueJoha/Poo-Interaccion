
const COLOR_PERRO = '\x1b[34m%s\x1b[0m';
class Perro {
    #nombre = "def nombre"
    #animo=true;
    #hambriento=true;
   
    constructor(nombre,animo,hambriento){
        this.#nombre=nombre;
        this.#animo=animo;
        this.#hambriento=hambriento;
    } 
    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    getNombre() {
        return this.#nombre
    }
    
habla(msj) {
    console.log(COLOR_PERRO, msj);
}
encuentra(persona) {
    if ( this.#animo>0) {
        this.habla("Mueve la cola a " + persona.getNombre())
        this.aceptaComida(persona)
    } else {
        this.habla("Ladra a " + persona.getNombre())
    }
        
    }
aceptaComida(persona){
    if ( this.#hambriento>0) {
        this.habla("Acepta el alimento de " + persona.getNombre())
    } else {
        this.habla("Gruñe a " + persona.getNombre())
    }
}
}
module.exports= Perro;