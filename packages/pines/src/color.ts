import { debug } from '@timberjs/timber'

export default class Color {
  static black = new Color(0, 0, 0)

  constructor(
    private red: number,
    private green: number,
    private blue: number,
    private alpha = 1
  ) {}

  toString(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
  }
}

export class Blue extends Color {
  constructor() {
    const [r, g, b, a] = colorFromHex('#1e3a8a')
    debug([r, g, b, a].join(''))
    super(r, g, b, a)
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
