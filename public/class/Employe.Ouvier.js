import { Employe } from "./Employe.js";
export class Ouvrier extends Employe {
    //   private dateEntree: Date;
    constructor(employe, dateEntree) {
        super(employe);
        this.dateEntree = dateEntree;
        this.salaireMensuel = this.calcSalaireMensuel();
    }
    calcAnciennete() {
        const currentYear = new Date().getFullYear();
        if (this.dateEntree) {
            const entryYear = this.dateEntree.getFullYear();
            return currentYear - entryYear;
        }
        throw new Error("dateEntree n'est pas definit");
    }
    calcSalaireMensuel() {
        const anciente = this.calcAnciennete();
        const salaireMensuel = Employe.SMIC + (anciente * 75);
        return salaireMensuel;
    }
    get salaireMensuel() {
        return this.employe.salaireMensuel;
    }
    set salaireMensuel(value) {
        if (value > 2 * Employe.SMIC) {
            console.error("Le salaire mensuel d'un ouvrier ne peut être supérieur à 2 SMIC \nsalair de 2*smic");
            this.salaireMensuel = 2 * Employe.SMIC;
        }
        else {
            this.employe.salaireMensuel = value;
        }
    }
    set dateEntree(value) {
        this.employe.dateEntree = value;
    }
    get dateEntree() {
        if (this.employe.dateEntree) {
            return this.employe.dateEntree;
        }
        throw new Error("employe.dateEntree n'est pas definit");
    }
}
