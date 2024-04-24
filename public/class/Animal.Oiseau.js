import { Animal } from "./Animal.js";
export class Oiseau extends Animal {
    constructor(animal) {
        super(animal);
        this.race = animal.race;
    }
    voler() {
        console.log(`l'${this.animal.race} vole}`);
    }
    crier() {
        console.log(`L'${this.animal.race} Chante`);
    }
    get race() {
        return this.animal.race;
    }
    set race(value) {
        if (value !== "oiseau") {
            console.error(" Attention l'animal n'est pas  un oiseau\n la race a etait changer pour oiseau");
            this.animal.race = "oiseau";
        }
        else {
            this.animal.race = value;
        }
    }
}
