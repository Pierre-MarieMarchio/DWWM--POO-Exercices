export class Employe {
    constructor(employe) {
        this.employe = employe;
    }
    getSalaryAnnuel() {
        let anualSalary = this.employe.salaireMensuel * 12;
        console.log(anualSalary);
    }
    ;
}
