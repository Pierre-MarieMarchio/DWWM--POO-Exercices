import { AnimalModel } from "../models/Animal.model.js";
import { IdGenerator } from "../class/IdGenerator.js";

export class Animal {
  protected animal: AnimalModel;

  constructor(animal: AnimalModel) {
    this.animal = animal;
    this.animal.id = animal.id || IdGenerator.generateId();
    this.weight = animal.weight;
    this.race = animal.race;
  }

  public get id(): string {
    if (this.animal.id) return this.animal.id;
    throw new Error("pas d'ID");
  }

  public get weight(): number {
    return this.animal.weight;
  }

  public set weight(value: number) {
    if (value !== undefined && (value < 0 || value > 100)) throw new Error("le poids doit etre comprie entre 0 et 100");
    this.animal.weight = value;
  }

  public get race(): string | undefined {
    return this.animal.race;
  }

  public set race(value) {
    if (value !== "chat" && value !== "oiseau") throw new Error("Ce n'est pas un annimal autorisée");
    this.animal.race = value;
  }

  public crier(): void {
    console.log(this.animal.race + " : l'animal crie");
  }
}
