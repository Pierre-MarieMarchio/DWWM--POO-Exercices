import { EmployeModel } from "../models/Employe.model";

export class Employe {
  employe: EmployeModel;

  constructor(employe: EmployeModel) {
    this.employe = employe;
  }

  getSalaryAnnuel(): void {
    let anualSalary: number = this.employe.salaireMensuel * 12;
    console.log(anualSalary);
  };


}
