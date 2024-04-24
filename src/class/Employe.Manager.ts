import { EmployeModel } from "../models/Employe.model.js";
import { Employe } from "./Employe.js";

export class Manager extends Employe {
  constructor(employe: EmployeModel, indice?: number) {
    super(employe);

    this.indice = employe?.indice ?? indice ?? 10;
    this.salaireMensuel = this.calcSalaireMensuel();
  }

  public set indice(value: number) {
    if (value < 10 || value > 30) throw new Error("l'indice n'est pas compris entre 10 et 30");
    if (!value) {
      console.warn("pas d'indice, attribution de l'indice minimum");
      this.employe.indice = 10;
    } else {
      this.employe.indice = value;
    }
  }

  private calcSalaireMensuel(): number {
    const indice = this.employe?.indice;
    if (indice === undefined) throw new Error("indice n'est pas défini");

    const salaireMensuel = Employe.SMIC * (indice / 10);

    return salaireMensuel;
  }
}
