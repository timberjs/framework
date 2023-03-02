import { appearance, Appearance } from '@timberjs/timber'
import { smallButtonPadding } from './spacing'
import Surface from './surface'
import Text from './text'

export default class Button extends Surface {
  private label = new Text()

  static withLabel(label: string) {
    return new Button().setLabel(label)
  }

  constructor() {
    super('button')
    this.add(this.label)
    ;(this.element as HTMLButtonElement).type = 'button'
    this.appearance.use(
      new Appearance().use(
        Appearance.withPropertyAndValue('background', '#00aa00'),
        Appearance.withPropertyAndValue(
          'box-shadow',
          '2px 2px 2px 1px rgba(0, 0, 0, 0.08)'
        ),
        Appearance.withPropertyAndValue('border-radius', '8px'),
        appearance`border: 1px solid transparent;`,
        smallButtonPadding
      )
    )
  }

  setLabel(label: string) {
    this.label.setValue(label)
    return this
  }
}
