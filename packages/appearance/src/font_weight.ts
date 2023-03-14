import Appearance from './appearance'

export default class FontWeight extends Appearance {
  static thin = FontWeight.fromWeight(100)
  static extraLight = FontWeight.fromWeight(200)
  static light = FontWeight.fromWeight(300)
  static normal = FontWeight.fromWeight(400)
  static medium = FontWeight.fromWeight(500)
  static semibold = FontWeight.fromWeight(600)
  static bold = FontWeight.fromWeight(700)
  static extraBold = FontWeight.fromWeight(800)
  static black = FontWeight.fromWeight(900)
  static ultraBlock = FontWeight.fromWeight(950)

  static fromWeight(weight: number) {
    return new FontWeight(weight)
  }

  constructor(weight: number) {
    super('font-weight', weight.toString())
  }
}
