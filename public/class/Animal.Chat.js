import { Animal } from "./Animal.js";
export class Chat extends Animal {
    constructor(animal) {
        super(animal);
        this.race = animal.race;
    }
    marcher() {
        console.log("le chat marche sur ses quatres pattes");
    }
    crier() {
        console.log(` Le ${this.animal.race} miaule pour des croquettes`);
    }
    get race() {
        return this.animal.race;
    }
    set race(value) {
        if (value !== "chat") {
            console.error(" Attention l'animal n'est pas  un chat\n la race a etait changer pour chat");
            this.animal.race = "chat";
        }
        else {
            this.animal.race = value;
        }
    }
}
