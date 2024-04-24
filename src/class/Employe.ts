import { EmployeModel } from "../models/Employe.model";
import { IdGenerator } from "../class/IdGenerator.js";

export class Employe {
  protected employe: EmployeModel;
  protected static SMIC: number = 1398.69

  constructor(employe: EmployeModel) {
    this.employe = employe;
    this.id = employe.id || IdGenerator.generateId();
    this.salaireMensuel = employe.salaireMensuel;
  }

  getSalaryAnnuel(): number {
    let annualSalary: number = this.employe.salaireMensuel * 12;
    return annualSalary
  }

  private set id(value: string) {

    this.employe.id = value;
     
  }

  public get id(): string {
    if (this.employe.id) return this.employe.id;
    throw new Error("pas d'id");
  }

  public get nom(): string {
    return this.employe.nom;
  }

  public get prenom(): string {
    return this.employe.prenom;
  }

  public get salaireMensuel(): number {
    return this.employe.salaireMensuel;
  }

  public set salaireMensuel(value) {
    if (value < Employe.SMIC || value > 10000) throw new Error("le salaire doit etre comprie entre le 1400 et 10000 EUR");
    this.employe.salaireMensuel = value;
  }
}
