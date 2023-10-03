
const COLOR_PERSONA='\x1b[32m%s\x1b[0m';
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

    encuentra(perro) {
        if (this.#animo > 0) {
        this.habla("Hola " + perro.getNombre())
        this.darDeComer(perro)
    }else{
        this.habla("Fuera " + perro.getNombre())
    }
       
    }
    darDeComer(perro){
    if (this.#bueno> 0) {
        this.habla("Queres comer " + perro.getNombre()+"?")
    }else{
        this.habla("Fuera " + perro.getNombre())
    }
}
}

module.exports= Persona;