export default class Color {
  static black = new Color(0, 0, 0)

  constructor(private red: number, private green: number, private blue: number, private alpha = 1) {

  }

  toString(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
  }
}
