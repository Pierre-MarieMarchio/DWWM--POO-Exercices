import { AnimalModel } from "../models/Animal.model.js";
import { Animal } from "./Animal.js";

export class Chat extends Animal {
  constructor(animal: AnimalModel) {
    super(animal);
    this.race = animal.race;
  }

  marcher() {
    console.log("le chat marche sur ses quatres pattes");
  }

  override crier() {
    console.log(` Le ${this.animal.race} miaule pour des croquettes`);
  }

  override get race(): string {
    return this.animal.race;
  }

  override set race(value: string) {
    if (value !== "chat") {
      console.error(" Attention l'animal n'est pas  un chat\n la race a etait changer pour chat");
      this.animal.race = "chat";
    } else {
      this.animal.race = value;
    }
  }
}
