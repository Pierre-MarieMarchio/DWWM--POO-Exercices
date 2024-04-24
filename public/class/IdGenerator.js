export class IdGenerator {
    constructor() { }
    static generateId() {
        const timestamp = Date.now();
        const counter = IdGenerator.counter;
        IdGenerator.counter++;
        const base36 = (timestamp * 1000 + counter).toString(36);
        return base36;
    }
}
IdGenerator.counter = 0;
