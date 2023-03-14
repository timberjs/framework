import Appearance from './appearance'
import Spacing from './spacing'

export const smallPadding = Appearance.withPropertyAndValue('padding', '4px')

export const smallButtonPadding = new Appearance().use(
  Appearance.withPropertyAndValue('padding-top', '4px'),
  Appearance.withPropertyAndValue('padding-bottom', '4px'),
  Appearance.withPropertyAndValue('padding-left', '8px'),
  Appearance.withPropertyAndValue('padding-right', '8px')
)

export default class Padding extends Spacing {
  static top(value: number) {
    return new Padding(`${value}px`, 'padding-top')
  }

  constructor(value: string, property: string) {
    super(property, value)
  }
}
