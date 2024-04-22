import { AnimalModel } from "./models/Animal.model.js";
import { Animal } from "./class/Animal.js";

import { EmployeModel } from "./models/Employe.model.js";
import { Employe } from "./class/Employe.js";

import { ProduitModel } from "./models/Produit.model.js";
import { Produit } from "./class/Produit.js";

import { IdGenerator } from "./class/IdGenerator.js";



// Exercice 1

const animal1: AnimalModel = {
  id: IdGenerator.generateId(),
  race: "chien",
  weight: 80,
};
const animal2: AnimalModel = {
  id: IdGenerator.generateId(),
  race: "chinchilla",
  weight: 4,
};

const ani1 = new Animal(animal1);
const ani2 = new Animal(animal2);

ani1.race = "chinchilla";
ani1.weight = 0.21;
// ani1.race = "chihuahua";
ani2.race = "chat";
ani2.weight = 4;
// ani2.weight = 1000

console.log(ani1.race);
console.log(ani2.race);
console.log(ani1.weight);
console.log(ani2.weight);

// Exercice 2

const employé1: EmployeModel = {
  nom: "Eymar",
  prenom: "Jean",
  salaireMensuel: 1400,
};

const employé2: EmployeModel = {
  nom: "Guyguyque",
  prenom: "Jean",
  salaireMensuel: 3400,
};

const employe1 = new Employe(employé1);
const employe2 = new Employe(employé2);

employe1.getSalaryAnnuel();
employe2.getSalaryAnnuel();

employe1.salaireMensuel = 3400;
// employe2.salaireMensuel = 150;


const prdt1: ProduitModel = {
  id: IdGenerator.generateId(),
  nom: "stylos",
  prixHT: 1.23,
  tauxTVA: 20,
};

const prdt2: ProduitModel = {
  id: IdGenerator.generateId(),
  nom: "farine",
  prixHT: 0.85,
  tauxTVA: 20,
};


const stylos = new Produit(prdt1);
const farine = new Produit(prdt2);


// prdt1.prixHT = -100
prdt1.tauxTVA = 10
console.log(prdt1.tauxTVA);

prdt2.tauxTVA = 5.5
prdt2.prixHT = 100

stylos.getDescription();
farine.getDescription();
