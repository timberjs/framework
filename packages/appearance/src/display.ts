import Appearance from './appearance'

enum DisplayValue {
  Flex = 'flex',
}

export default class Display extends Appearance {
  static flex = Display.withDisplayValue(DisplayValue.Flex)

  static withDisplayValue(displayValue: DisplayValue) {
    return new Display(displayValue)
  }

  constructor(displayValue: DisplayValue) {
    super('display', displayValue.toString())
  }
}
