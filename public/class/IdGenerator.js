export class IdGenerator {
    constructor() { }
    static generateId() {
        const timestamp = Date.now();
        const counter = IdGenerator._counter;
        IdGenerator._counter++;
        const base36 = (timestamp * 1000 + counter).toString(36);
        return base36;
    }
}
IdGenerator._counter = 0;
