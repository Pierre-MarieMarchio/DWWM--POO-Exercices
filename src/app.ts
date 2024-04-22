import { AnimalModel } from "./models/Animal.model.js";
import { Animal } from "./class/Animal.js";

import { EmployeModel } from "./models/Employe.model.js";
import { Employe } from "./class/Employe.js";
import { ProduitModel } from "./models/Produit.model.js";
import { Produit } from "./class/Produit.js";


// Exercice 1

const animal1: AnimalModel  = {
    id: 1,
    race: "human",
    weight: 80,
}
const animal2: AnimalModel = {
    id: 2,
    race: "cat",
    weight: 4,
};



const human = new Animal(animal1);
const cat = new Animal(animal2);

human.crier();
cat.crier();

// Exercice 2

const employé1: EmployeModel = {
    id: 1,
    nom: "Eymar",
    prenom: "Jean",
    salaireMensuel: 1400,

};

const employé2: EmployeModel = {
    id: 1,
    nom: "Guyguyque",
    prenom: "Jean",
    salaireMensuel: 3400,

};


const employe1 = new Employe(employé1);
const employe2 = new Employe(employé2)

employe1.getSalaryAnnuel();
employe2.getSalaryAnnuel();

const prdt1: ProduitModel = {
    id: 1,
    nom: "stylos",
    prixHT: 1.23,
    tauxTVA: 20,
}

const prdt2: ProduitModel = {
    id: 2,
    nom: "farine",
    prixHT: 0.85,
    tauxTVA: 20,
}


const stylos = new Produit(prdt1)
const farine = new Produit(prdt2)


stylos.getDescription();
farine.getDescription();