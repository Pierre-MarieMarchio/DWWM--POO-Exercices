import { IdGenerator } from "../class/IdGenerator.js";
export class Employe {
    constructor(employe) {
        this.employe = employe;
        this.id = employe.id || IdGenerator.generateId();
        this.salaireMensuel = employe.salaireMensuel;
    }
    getSalaryAnnuel() {
        let annualSalary = this.employe.salaireMensuel * 12;
        return annualSalary;
    }
    set id(value) {
        this.employe.id = value;
    }
    get id() {
        if (this.employe.id)
            return this.employe.id;
        throw new Error("pas d'id");
    }
    get nom() {
        return this.employe.nom;
    }
    get prenom() {
        return this.employe.prenom;
    }
    get salaireMensuel() {
        return this.employe.salaireMensuel;
    }
    set salaireMensuel(value) {
        if (value < Employe.SMIC || value > 10000)
            throw new Error("le salaire doit etre comprie entre le 1400 et 10000 EUR");
        this.employe.salaireMensuel = value;
    }
}
Employe.SMIC = 1398.69;
