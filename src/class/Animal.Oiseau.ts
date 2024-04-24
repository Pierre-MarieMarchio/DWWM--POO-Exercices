import { AnimalModel } from "../models/Animal.model.js";
import { Animal } from "./Animal.js";

export class Oiseau extends Animal {
  constructor(animal: AnimalModel) {
    super(animal);
    this.race = animal.race;
  }

  voler(): void {
    console.log(`l'${this.animal.race} vole}`);
  }

  override crier(): void {
    console.log(`L'${this.animal.race} Chante`);
  }

  override get race(): string {
    return this.animal.race;
  }

  override set race(value: string) {
    if (value !== "oiseau") {
      console.error(" Attention l'animal n'est pas  un oiseau\n la race a etait changer pour oiseau");
      this.animal.race = "oiseau";
    } else {
      this.animal.race = value;
    }
  }
}
