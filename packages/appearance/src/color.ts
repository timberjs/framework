export default class Color {
  static black = new Color(0, 0, 0)
  static white = new Color(255, 255, 255)

  static fromHexCode(hex: string) {
    const [r, g, b, a] = colorFromHex(hex)
    return new Color(r, g, b, a)
  }

  constructor(
    private red: number,
    private green: number,
    private blue: number,
    private alpha = 1
  ) {}

  toString(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
  }

  withAlpha(value: number) {
    this.alpha = Math.min(Math.max(value, 0), 1)
  }

  get rgba() {
    return this.toString()
  }
}

type RGBAType = [number, number, number, number]

function colorFromHex(hex: string): RGBAType {
  hex = hex.replace(/[^0-9a-z]/gi, '')
  if (hex.length < 5)
    hex
      .split('')
      .map((component) => [component, component].join(''))
      .join('')
  return hex
    .match(/.{1,2}/g)
    ?.map((component) => parseInt(component, 16)) as RGBAType
}
