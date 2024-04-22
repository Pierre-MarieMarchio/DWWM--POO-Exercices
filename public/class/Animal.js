export class Animal {
    constructor(animal) {
        this.animal = animal;
    }
    crier() {
        console.log(this.animal.race + " : l'animal crie");
    }
}
