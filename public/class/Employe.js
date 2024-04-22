import { IdGenerator } from "../class/IdGenerator.js";
export class Employe {
    constructor(employe) {
        this.employe = employe;
        this.employe.id = employe.id || IdGenerator.generateId();
        this.salaireMensuel = employe.salaireMensuel;
    }
    getSalaryAnnuel() {
        let annualSalary = this.employe.salaireMensuel * 12;
        return annualSalary;
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
        if (value < 1400 || value > 10000)
            throw new Error("le salaire doit etre comprie entre le 1400 et 10000 EUR");
        this.employe.salaireMensuel = value;
    }
}
