import { EmployeModel } from "../models/Employe.model.js";
import { Employe } from "./Employe.js";

export class Ouvrier extends Employe {
//   private dateEntree: Date;

  constructor(employe: EmployeModel, dateEntree: Date) {
    super(employe);
    this.dateEntree = dateEntree;
    this.salaireMensuel = this.calcSalaireMensuel();
  }

  private calcAnciennete(): number {
    const currentYear = new Date().getFullYear();
    if (this.dateEntree) {
      const entryYear = this.dateEntree.getFullYear();  
      return currentYear - entryYear;
    }
    
    throw new Error("dateEntree n'est pas definit");
    
  }

  private calcSalaireMensuel(): number {
    const anciente = this.calcAnciennete();
    const salaireMensuel = Employe.SMIC + (anciente * 75);

    return salaireMensuel;
  }

  public override get salaireMensuel(): number {
    return this.employe.salaireMensuel;
  }

  private override set salaireMensuel(value: number) {
    if (value > 2 * Employe.SMIC) {
      console.error("Le salaire mensuel d'un ouvrier ne peut être supérieur à 2 SMIC \nsalair de 2*smic");
      this.salaireMensuel = 2 * Employe.SMIC;
    } else {
        this.employe.salaireMensuel = value;
    }
    
  }

  public set dateEntree(value: Date) {
    this.employe.dateEntree = value;

  } 

  public get dateEntree(): Date {
    if (this.employe.dateEntree) {
        return this.employe.dateEntree;
    }
    throw new Error("employe.dateEntree n'est pas definit");
    
  }
}
