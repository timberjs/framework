import { Appearance } from '@timberjs/timber'
import Color from './color'

export default class Background extends Appearance {
  static withColor(color: Color) {
    return new Background('background', color.toString())
  }

  static asGradient(start: Color, end: Color) {
    const background = new Background('background', start.toString())
    return background.use(
      new Appearance(
        'background',
        `linear-gradient(45deg, ${start.toString()} 0%, ${end.toString()} 100%)`
      )
    )
  }
}

export const blackBackground = Background.withColor(Color.black)
