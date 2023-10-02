
const COLOR_PERRO = '\x1b[34m%s\x1b[0m';
class Perro {
    #nombre = "def nombre"

    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    getNombre() {
        return this.#nombre
    }
    mueveLaColaA(jose) {
        this.habla("Mueve la cola a " + jose.getNombre())
    }
habla(msj) {
    console.log(COLOR_PERRO, msj);
}
}

module.exports= Perro;