


class Persona {
    #nombre = "def nombre";

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    getNombre() {
        return this.#nombre
    }
    acaricia(perro) {
        console.log("Hola " + perro.getNombre())
    }
}


class Perro {
    #nombre = "def nombre"

    setNombre(nuevoNombre) {
        this.#nombre = nuevoNombre
    }
    getNombre() {
        return this.#nombre
    }
    mueveLaColaA(jose) {
        console.log("Mueve la cola a " + jose.getNombre())
    }

}
const persona = new Persona();
const perro = new Perro();

persona.setNombre("Jose");
perro.setNombre("Terry");

persona.acaricia(perro);
perro.mueveLaColaA(persona);
