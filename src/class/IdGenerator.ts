export class IdGenerator {
  private static _counter: number = 0;

  private constructor() {}

  public static generateId(): string {
    const timestamp = Date.now();
    const counter = IdGenerator._counter;
    IdGenerator._counter++;
    const base36 = (timestamp * 1000 + counter).toString(36);
    return base36;
  }
}
