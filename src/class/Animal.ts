import { AnimalModel } from "../models/Animal.model.js";

export class Animal {
  animal: AnimalModel;

  constructor(animal: AnimalModel) {
    this.animal = animal;
  }

  crier(): void {
    console.log(this.animal.race + " : l'animal crie");
  }
}
