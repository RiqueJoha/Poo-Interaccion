
const COLOR_PERSONA='\x1b[32m%s\x1b[0m';
class Persona {
    #nombre = "def nombre";
    #animo=true;
    #bueno=true;

    constructor(nombre,animo,bueno){
        this.#nombre=nombre;
        this.#animo=animo;
        this.#bueno=bueno;
    }
    habla(msj) {
        console.log(COLOR_PERSONA, msj);
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre
    }

    encuentra(perro) {
        if (this.#animo === true) {
        this.habla("Hola " + perro.getNombre())
        this.darDeComer(perro)
    }else{
        this.habla("Fuera " + perro.getNombre())
    }
       
    }
    darDeComer(perro){
    if (this.#bueno=== true) {
        this.habla("Queres comer " + perro.getNombre()+"?")
    }else{
        this.habla("Fuera " + perro.getNombre())
    }
}
}

module.exports= Persona;