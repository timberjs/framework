import Appearance from './appearance'

export default class Spacing extends Appearance {
  static top(value: number) {}

  static even(value: number) {
    return new Appearance('padding', `${value.toString()}px`)
  }

  static vertical(x: number, y = 0) {
    return new Appearance('padding', `${x.toString()}px ${y.toString()}px`)
  }

  static horizontal(y: number, x = 0) {
    return new Appearance('padding', `${x.toString()}px ${y.toString()}px`)
  }
}
