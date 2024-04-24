import { Employe } from "./Employe.js";
export class Manager extends Employe {
    constructor(employe, indice) {
        var _a, _b;
        super(employe);
        this.indice = (_b = (_a = employe === null || employe === void 0 ? void 0 : employe.indice) !== null && _a !== void 0 ? _a : indice) !== null && _b !== void 0 ? _b : 10;
        this.salaireMensuel = this.calcSalaireMensuel();
    }
    set indice(value) {
        if (value < 10 || value > 30)
            throw new Error("l'indice n'est pas compris entre 10 et 30");
        if (!value) {
            console.warn("pas d'indice, attribution de l'indice minimum");
            this.employe.indice = 10;
        }
        else {
            this.employe.indice = value;
        }
    }
    calcSalaireMensuel() {
        var _a;
        const indice = (_a = this.employe) === null || _a === void 0 ? void 0 : _a.indice;
        if (indice === undefined)
            throw new Error("indice n'est pas défini");
        const salaireMensuel = Employe.SMIC * (indice / 10);
        return salaireMensuel;
    }
}
