import { Appearance } from '@timberjs/timber'
import Color from './color'

export default class Foreground extends Appearance {
  static white = Foreground.withColor(new Color(255, 255, 255))

  static withColor(color: Color) {
    return new Foreground('color', color.toString())
  }
}
