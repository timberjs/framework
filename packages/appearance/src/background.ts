import Appearance from './appearance'
import Color from './color'
import Palette from './palette'

export default class Background extends Appearance {
  static blue = Background.usingColor(Palette.blue.variant(400))

  static usingColor(color: Color) {
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

export const blackBackground = Background.usingColor(Color.black)
