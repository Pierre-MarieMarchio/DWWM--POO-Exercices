import { IdGenerator } from "../class/IdGenerator.js";
export class Animal {
    constructor(animal, race) {
        this.animal = animal;
        this.animal.id = animal.id || IdGenerator.generateId();
        this.weight = animal.weight;
        this.race = animal.race || race;
    }
    crier() {
        console.log(this.animal.race + " : l'animal crie");
    }
    get id() {
        if (this.animal.id)
            return this.animal.id;
        throw new Error("pas d'ID");
    }
    get weight() {
        return this.animal.weight;
    }
    set weight(value) {
        if (value !== undefined && (value < 0 || value > 100))
            throw new Error("le poids doit etre comprie entre 0 et 100");
        this.animal.weight = value;
    }
    get race() {
        return this.animal.race;
    }
    set race(value) {
        if (value !== "chien" && value !== "chat" && value !== "chinchilla")
            throw new Error("Ce n'est pas un annimal autorisée");
        this.animal.race = value;
    }
}
