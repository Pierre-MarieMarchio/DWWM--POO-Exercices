// Animals Class
import { Animal } from "./class/Animal.js";
import { Chat } from "./class/Animal.Chat.js";
import { Oiseau } from "./class/Animal.Oiseau.js";
import { Employe } from "./class/Employe.js";
import { Ouvrier } from "./class/Employe.Ouvier.js";
import { Produit } from "./class/Produit.js";
import { IdGenerator } from "./class/IdGenerator.js";
import { Manager } from "./class/Employe.Manager.js";
// Exercice 1
const animal1 = {
    id: IdGenerator.generateId(),
    race: "oiseau",
    weight: 80,
};
const animal2 = {
    id: IdGenerator.generateId(),
    race: "chat",
    weight: 4,
};
const ani1 = new Animal(animal1);
const ani2 = new Animal(animal2);
// ani1.race = "chinchilla";
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
const employé1 = {
    nom: "Eymar",
    prenom: "Jean",
    salaireMensuel: 1400,
};
const employé2 = {
    nom: "Guyguyque",
    prenom: "Jean",
    salaireMensuel: 3400,
};
const employe1 = new Employe(employé1);
const employe2 = new Employe(employé2);
employe1.getSalaryAnnuel();
employe2.getSalaryAnnuel();
// employe1.salaireMensuel = 3400;
// employe2.salaireMensuel = 150;
const prdt1 = {
    id: IdGenerator.generateId(),
    nom: "stylos",
    prixHT: 1.23,
    tauxTVA: 20,
};
const prdt2 = {
    id: IdGenerator.generateId(),
    nom: "farine",
    prixHT: 0.85,
    tauxTVA: 20,
};
const stylos = new Produit(prdt1);
const farine = new Produit(prdt2);
// prdt1.prixHT = -100
prdt1.tauxTVA = 10;
console.log(prdt1.tauxTVA);
prdt2.tauxTVA = 5.5;
prdt2.prixHT = 100;
stylos.getDescription();
farine.getDescription();
// Exercice 3.1
const chat1 = new Chat(animal1);
console.log(chat1.race);
const oiseau1 = new Oiseau(animal2);
console.log(oiseau1.race);
// Exercice 3.2
const ouvrier1 = new Ouvrier(employe1, new Date(2000, 2, 1));
console.log(ouvrier1.salaireMensuel);
const manager1 = new Manager(employe1);
console.log(manager1.salaireMensuel);
const manager2 = new Manager(employe2, 30);
console.log(manager2.salaireMensuel);
