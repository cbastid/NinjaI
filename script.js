/**Genera Constructor */
function ninjaConstructor(nombreNinja) {
    this.nombre = nombreNinja;
    this.vida = 100;
    this.velocidad = 3;
    this.fuerza = 3;

    this.showstats = function(){
        console.log("->Nombre " + this.nombre + ", Vida " + this.vida + " , Velocidad " + this.velocidad + " , fuerza " + this.fuerza);
    }
    this.sayName = function() {
        console.log("-> El nombre de mi ninja es " + this.nombre);
    };
    this.drinkSake = function() {
        console.log("->Nombre " + this.nombre + ", Vida " + (this.vida + 10) );
    }
}

/**sayName() - Esto debe registrar el nombre del ninja a nuestra consola. */
let ninja1 = new ninjaConstructor("Hyabusa");
ninja1.sayName();

/**showStats() - Esto debe mostrar el nombre, vida, fuerza y velocidad del ninja */
ninja1.showstats();

/**drinkSake() - Esto debe agregar +10 de vida al ninja. */
ninja1.drinkSake();
