import { Appearance } from '@timberjs/timber'
import Background from './background'
import Border from './border'
import Foreground from './foreground'
import Palette from './palette'
import Rounded from './rounded'
import { Padding } from './spacing'
import Surface from './surface'
import Text from './text'
import { useVariable } from './variable'

export default class Button extends Surface {
  private label = new Text()

  static withLabel(label: string) {
    return new Button().setLabel(label)
  }

  constructor() {
    super('button')
    this.add(this.label)
    ;(this.element as HTMLButtonElement).type = 'button'
    this.appearance.use(buttonAppearance)
  }

  setLabel(label: string) {
    this.label.setValue(label)
    return this
  }
}

const buttonAppearance = new Appearance().use(
  Foreground.white,
  Background.withColor(Palette.sky.variant(400)),
  Padding.horizontal(8, 4),
  Border.transparent,
  Rounded.large,
  new Appearance('font-size', useVariable('font-size-md'))
)
